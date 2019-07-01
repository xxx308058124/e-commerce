import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import  '@/style/found.scss'
class Com extends Component {
  render() {
    return (
      <div className="box">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          className="header"
        >发现</NavBar>
        <div className="content">
          <div className="found">
            <div className="section">
              <div className="section-left">
              <div>
                <h2>金币商城</h2>
                <p>0元好物在这里</p>
                <div className="iconfont icon-shangchengpro" ></div>
              </div>
              </div>
              <div className="section-top">
                <div>
                <h2>推荐有奖</h2>
                <p>10元现金拿不停</p>
                </div>
              </div>
              <div className="section-bottom">
                <div>
                <h2>周边优惠</h2>
                <p>领取口碑好券</p>
                </div>
              </div>
              </div>
            <div className="price">
              <div className="title">
                <h2 className="tit1">限时好礼</h2>
                <p className="tit2">金币换豪礼</p>
              </div>
              <ul className="list">
                <li>
                    <span className="tejia">特价换购</span>
                    <img src="img/1.jpg" alt="11"/>
                    <p className="hongbao">3元饿了么红包</p>
                    <em>90金币</em>
                </li>
                <li>
                    <span className="tejia">特价换购</span>
                    <img src="img/2.jpg" alt="11"/>
                    <p className="hongbao">3元饿了么红包</p>
                    <em>90金币</em>
                </li>
                <li>
                    <span className="tejia">特价换购</span>
                    <img src="img/3.jpg" alt="11"/>
                    <p className="hongbao">3元饿了么红包</p>
                    <em>90金币</em>
                </li>
              </ul>
              <div className="genduo">查看更多></div>
            </div>  
        </div>
    </div> 
  </div>
    )
  }
}

export default Com;
