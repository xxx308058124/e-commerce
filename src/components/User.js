import React, { Component } from 'react';
import { NavBar, Icon, List, Grid } from 'antd-mobile';
import '@/style/user.scss';
const Item = List.Item;
const Brief = Item.Brief;
class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logBefore: true,
      logAfter: false
    };
  }
  componentDidMount () {
    if (sessionStorage.getItem('userName')) {
      // console.log(this)
      this.setState({
        logBefore: false,
        logAfter: true
      });
    } else {
      this.setState({
        logBefore: true,
        logAfter: false
      });
    }
  }
  goRegister (path) {
    // console.log(this);
    this.props.history.push(path);
  }
  goLogin (path) {
    // console.log(this);
    this.props.history.push(path);
  }
  goUserMessage (path) {
    this.props.history.push(path);
  }
  render() {
    const data = Array.from(new Array(['钱包'],['红包'],['金币'])).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: _val,
    }));
    return (
        <div className="box">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            className="header"
          >我的</NavBar>
          <div className="content">
            <List className="my-list">
              <Item
                arrow="horizontal"
                thumb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
                multipleLine
                className="logBefore"
                style={{display: (this.state.logBefore) ? "block" : "none"}}
              >
                <button onClick={ this.goLogin.bind(this, '/login')}>登录</button>/
                <button onClick={ this.goRegister.bind(this, '/register')}>注册</button>
                <Brief>登录后享受更多特权</Brief>
              </Item>
              <Item
                arrow="horizontal"
                thumb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
                multipleLine
                className="logAfter"
                onClick={ this.goUserMessage.bind(this, '/userMessage') }
                style={{display: (this.state.logAfter) ? "block" : "none"}}
              >
                <span> { sessionStorage.getItem('userName') } </span>
                <Brief>{ sessionStorage.getItem('userName') }</Brief>
              </Item>
            </List>
            <Grid 
              data={data}
              activeStyle={false}
              columnNum={3}
              itemStyle={{ height: '0.72rem' }}
            />
            <List className="userList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >我的地址</Item>
            </List>
            <List className="userList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >金币商城</Item>
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >分享拿十元现金</Item>
            </List>
            <List className="userList">
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >我的客服</Item>
              <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
              >下载饿了吗APP</Item>
            </List>
          </div>
        </div>
    );
  }
}

export default Com;
