import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import axios from 'axios';
import '@/style/order.scss'
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      foodList: [],
      foodNum: []
    }
  }

  componentDidMount () {
    let foodArry = [];
    var params = new URLSearchParams();
    params.append('username', sessionStorage.getItem('userName'));
    // params.append('username', sessionStorage.getItem('userName'));
    axios.post('http://10.8.161.47:3000/users/querygoods', params)
      .then(data => {
        // console.log(data.data);
        this.setState({
          foodNum: data.data
        })
        data.data.map((item, index) => {
          let foodId = item.food_id;
          // console.log(foodId);
          var params = new URLSearchParams();
          params.append('food_id', foodId);
          axios.post('http://10.8.161.47:3000/foods/specfoods', params)
            .then(data => {
              // console.log(data.data);
              foodArry.push(data.data);
              // console.log(foodArry);
              this.setState({
                foodList: foodArry
              })
            })
        })
      })
  }
  deleteFood (id) {
    var params = new URLSearchParams();
    params.append('username', sessionStorage.getItem('userName'));
    params.append('food_id', id);
    axios.post('http://10.8.161.47:3000/users/removegoods', params)
      .then(data => {
        // console.log(data);
        this.props.history.go('/order');
      })
  }

  render() {
    return (
      <div className="box">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          className="header"
        >订单</NavBar>
        <div className="content">
          <ul className="orderList">
            {
              this.state.foodList.map((item, index) => {
                return (
                  <li key={ index }>
                    <img src="img/toux.jpg" alt="22"/>
                    <div className="foodDetail">
                      <div className="shopName">
                        <h2 className="storeName">知情居家常菜那哪是111111</h2>
                        <p className="status">订单已送达</p>
                      </div>
                      <div className="food">
                        <div className="goods">{ item.name } X <span>{this.state.foodNum[0].num}</span></div>
                        <div className="pri">￥{ this.state.foodNum[0].num*item.price }</div>
                      </div>
                      <div className="caozuo">
                        <p onClick={ this.deleteFood.bind(this, item.food_id)}>删除</p>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Com;
