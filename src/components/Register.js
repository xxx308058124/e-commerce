import React, { Component } from 'react';
import { List, InputItem, Toast, Button } from 'antd-mobile';
import axios from 'axios';
import '@/style/register.scss';
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
    console.log(this.state.userName)
    var params = new URLSearchParams();
    params.append('username', this.state.userName);
    params.append('password', this.state.passWord);
    axios.post('http://10.8.161.47:3000/users/register', params)
      .then(data => {
        console.log(data.data)
        if (data.data.code === 0) {
          Toast.info('该手机号已经注册')
        } else if (data.data.code === 1) {
          Toast.info('注册成功！')
          this.props.history.push('/login');
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
            type="primary">注册</Button>
        </div>
    );
  }
}

export default Com;
