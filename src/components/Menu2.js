import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';


class Menu2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  componentDidMount () {
    // console.log(this);
  }
  render () {
    let food = []
    this.props.def.map((item, value) => {
      let foodArry = []
      item.foods.map((itm, val) => {
        foodArry.push(<li key={val} style={{ width: '100%', height: '.84rem', display: 'flex', marginBottom: '.2rem' }}>
          <img src={ itm.image_path } style={{ width: '.84rem', height: '.84rem' }} />
          <div className="foodInfo" style={{ marginLeft: '.06rem', width: '100%', height: '.84rem', display: 'flex', flexDirection: 'column' }}>
            <h2>{ itm.name }</h2>
            <div className="monthlyPerformance" style={{ width: '100%', display: 'flex', fontSize: '.12rem', color: '#999' }}>
              <p>月售{ itm.month_sales }份</p>
              <span style={{ marginLeft: '.1rem' }}>好评率{ itm.satisfy_rate }%</span>
            </div>
            <div className="foodPrice" style={{ width: '100%', marginTop: '.28rem', fontSize: '.2rem', color: '#f00', display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ fontWeight: 'normal' }}>￥{ itm.specfoods[0].price.toFixed(2) }</h3>
              <span
                className="iconfont icon-jiahao"
                style={{ fontSize: '.2rem', color: '#00aaff', marginRight: '.16rem' }}
                onClick={()=>{this.props.jionCart(itm, this.state.count++)}}
              ></span>
            </div>
          </div>
        </li>)
      })
      food.push(
        <li className="listWrap" key = { value } style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ height: '.3rem', lineHeight: '.3rem', fontSize: '.12rem' }}>{ item.name }</h2>
          <ul className="listIn">
            { foodArry }
          </ul>
        </li>
      )
    })
    return (
      <div className="fL">
      <WhiteSpace />
      <Tabs tabs={
        this.props.def.map((item, index) => {
          return (
            {title: item.name}
          )
        })
      }
        distanceToChangeTab = {1}
        initalPage={'t2'}
        tabBarPosition="left"
        tabDirection="vertical"
      >
      <div className="foodList">
        {
          food
        }
      </div>
      </Tabs>
      <WhiteSpace />
  </div>
    )
  };
}

export default Menu2;