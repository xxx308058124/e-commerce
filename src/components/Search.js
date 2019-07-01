import React, { Component } from 'react';
import { List } from 'antd-mobile';
import axios from 'axios';
import '@/style/search.scss';
const Item = List.Item;
class Com extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyWord: '',
      foodList:[]
    }
  }
  handelChange(e){
    // console.log(e)
    this.setState({
      keyWord:e.target.value
    })
  }
  search () {
    // console.log(this)
    var params = new URLSearchParams();
    params.append('name', this.state.keyWord);
    axios.post(`http://10.8.161.47:3000/foods/search`, params)
      .then(data => {
        console.log(data.data)
        this.setState({
          foodList: data.data
        })
      }).catch(err => console.log(err))
  }
  goHome (path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="box">
        <div className="content">
          <header className="searchHeader">
            <span onClick={this.goHome.bind(this, '/home')} className="iconfont icon-arrow_lift"></span>
            <input 
              type="text"
              placeholder="输入商家、商品名称"
              defaultValue={ this.state.keyWord }
              onChange={this.handelChange.bind(this)}
            />
            <p onClick={ this.search.bind(this)}>搜索</p>
          </header>
          <List>
            {
              this.state.foodList.map((item, index) => {
                return (
                  <Item key={ index } align="top" thumb={ item.shop_img_url } multipleLine>
                    { item.name }
                  </Item>
                )
              })
            }
          </List>
        </div>
      </div>
    );
  }
}

export default Com;
