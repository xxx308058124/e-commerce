import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          icon: 'iconfont icon-elmyhq',
          name: '首页',
          path: '/home'
        },
        {
          icon: 'iconfont icon-faxian',
          name: '发现',
          path: '/found'
        },
        {
          icon: 'iconfont icon-dingdan',
          name: '订单',
          path: '/order'
        },
        {
          icon: 'iconfont icon-wode',
          name: '我的',
          path: '/user'
        }
      ]
    }
  }
  render() {
    return (
        <footer className="footer">
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li key={ index }>
                    <NavLink to= { item.path }>
                    <span className={ item.icon }></span>
                    <p>{ item.name }</p>
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </footer>
    );
  }
}

export default App;
