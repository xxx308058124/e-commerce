import React, { Component } from 'react';
import { Tabs, Badge } from 'antd-mobile';
import Menu2 from './Menu2';
import { Rate } from 'element-react';
import 'element-theme-default';


class Menu extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // console.log(this)
  }
  jionCart (data, count) {
    // console.log(data)
    this.props.fn(data, count);
  }
  render() {
    const tabs = [
      { title: <Badge >点餐</Badge> },
      { title: <Badge >评价</Badge> },
      { title: <Badge >商家</Badge> }
    ];
    const tabs1 = [
      { title: '全部' },
      { title: '满意' },
      { title: '不满意' }
    ];
    return (
          <Tabs tabs={tabs}
            initialPage={0}
          >
            <div className="food">
              <Menu2 test="测试" def={ this.props.abc } jionCart = { this.jionCart.bind(this) }></Menu2>
            </div>
            <div className="rating">
              <Tabs
                tabs={tabs1} initialPage={2}
                animated={false}
                useOnPan={false}
              >
                <div className="allrating">
                  <ul className="rating">
                    {
                      this.props.allRating.map((item, index) => {
                        return (
                          <li key = { index } className="rating-list">
                         <div className="img">
                          <img src="/img/toux.jpg" alt="11 " style={{ width: '.35rem', height: '.35rem' ,float:'left'}}/>
                         </div>
                          
                            <div className="li-wrap">
                              
                              <div className="h6">
                                <div className="h2">
                                  <p className="username">{ item.username }</p>
                                  <i className="time"> { item.rated_at } </i>
                                </div>
                                <div className="h5">
                                <Rate disabled={true} value={ item.rating_star } showText={false} />
                                  <h3> { item.rating_text } </h3>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="allrating">
                  <ul className="satisfiedRating rating">
                    {
                      this.props.satisfiedRating.map((item, index) => {
                        return (
                          <li key = { index } className="rating-list">
                            <div className="li-wrap">
                            <div className="img">
                            <img src="/img/toux.jpg" alt="11 " style={{ width: '.35rem', height: '.35rem' ,float:'left'}}/>
                            </div>
                              <div className="h6">
                                <div className="h2">
                                  <p className="username">{ item.username }</p>
                                  <i className="time"> { item.rated_at } </i>
                                </div>
                                <div className="h5">
                                <Rate disabled={true} value={ item.rating_star } showText={false} />
                                  <h3> { item.rating_text } </h3>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="allrating">
                  <ul className="dissatisfiedRating rating">
                    {
                      this.props.dissatisfiedRating.map((item, index) => {
                        return (
                          <li key = { index } className="rating-list">
                            <div className="li-wrap">
                            <div className="img" style={{width:'0.35rem',height:'0.35rem',float:'left' }}>
                            <img src="/img/toux.jpg" alt="11 " style={{ width: '.35rem', height: '.35rem' ,}}/>
                            </div>
                              <div className="h6">
                                <div className="h2">
                                  <p className="uesrname">{ item.username }</p>
                                  <i className="time"> { item.rated_at } </i>
                                </div>
                                <div className="h5">
                                <Rate disabled={true} value={ item.rating_star } showText={false} />
                                  <h3> { item.rating_text } </h3>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </Tabs>
            </div>
            <div className="shop">
              商家信息
            </div>
          </Tabs>
    )
  };
}
export default Menu;
