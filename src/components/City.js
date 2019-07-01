import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
// import axios from 'axios';
// import '@/style/home.scss';
class Com extends Component {
  goHome (path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="box">
        <div className="content">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={this.goHome.bind(this, '/home')}
          >
            城市选择
          </NavBar>
          定位
        </div>
      </div>
    );
  }
}

export default Com;
