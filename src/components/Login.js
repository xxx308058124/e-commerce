import React, { Component } from 'react';
import { List, InputItem, Toast, Button } from 'antd-mobile';
import axios from 'axios';
import '@/style/login.scss';
class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '15083075082',
      passWord: 'a1',
      hasError: ''
    }
  }
  onErrorClickUsername = () => {
    if (this.state.hasError) {
      Toast.info('请输入11位手机号');
    }
  }
  onErrorClickPassword = () => {
    if (this.state.hasError) {
      Toast.info('请输入数字和字母组合的密码');
    }
  }
  handleGetUsernameValue = (userName) => {
    if (userName.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      userName,
    });
  }
  handleGetPasswordValue = (passWord) => {
    const exg = /^(?![^a-zA-Z]+$)(?!\D+$)/
    if (exg.test(this.state.passWord)) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      passWord,
    });
  }
  reg () {
    // console.log(this.state.userName)
    var params = new URLSearchParams();
    params.append('username', this.state.userName);
    params.append('password', this.state.passWord);
    axios.post('http://10.8.161.47:3000/users/login', params)
      .then(data => {
        console.log(data.data)
        if (data.data.code === 0) {
          Toast.info('用户名密码错误')
        } else if (data.data.code === 1) {
          Toast.info('登录成功！')
          this.props.history.push('/user');
          sessionStorage.setItem('userName', this.state.userName)
        }
      })
  }
  render() {
    return (
        <div className="box">
          <div className="logo">
            <span className="iconfont icon-elmyhq">饿了么</span>
          </div>
          <List>
            <InputItem
              type="phone"
              placeholder="input your phone"
              error={this.state.hasError}
              onErrorClick={this.onErrorClickUsername.bind(this)}
              onChange={this.handleGetUsernameValue.bind(this)}
              value={this.state.userName}
            >手机号码</InputItem>
            <InputItem
              type="password"
              error={this.state.hasError}
              onErrorClick={this.onErrorClickPassword.bind(this)}
              value={this.state.passWord}
              onChange={this.handleGetPasswordValue.bind(this)}
              placeholder="****"
            >密码</InputItem>
          </List>
          <Button 
            onClick={this.reg.bind(this)}
            type="primary">登录</Button>
        </div>
    );
  }
}

export default Com;
