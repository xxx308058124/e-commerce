import React, { Component } from 'react';
import { List, Grid } from 'antd-mobile';
import axios from 'axios';
import '@/style/home.scss';
const Item = List.Item;
const Brief = Item.Brief;
class Com extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      mounting: true,
      up: true,
      foodList: []
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    document.querySelector('.content').addEventListener('scroll', this.handleScroll);
    axios.get(`http://10.8.161.47:3000/foods/food`)
      .then(data => {
        // console.log(data.data)
        this.setState({
          foodList: data.data
        })
      }).catch(err => console.log(err))
  }
  componentWillUnmount () {
    this.setState = (state,callback)=>{
      return;
    };
  }
  handleScroll () {
    this.scrollTop = document.querySelector('.content').pageYOffset || document.querySelector('.content').scrollTop || document.querySelector('.content').scrollTop
    // console.log(this.scrollTop)
    if(this.scrollTop>100){
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false,
        mounting: true
      })
    }
    if (this.scrollTop>44) {
      this.setState({
        mounting: false,
        up: false
      })
    } else {
      this.setState({
        mounting: true,
        up: true
      })
    }
  }
  goTop(){
    let timer=null,_that=this;
      cancelAnimationFrame(timer)
      timer=requestAnimationFrame(function fn(){
        if(_that.scrollTop>0){
          _that.scrollTop-=50;
          document.querySelector('.content').scrollTop = document.querySelector('.content').scrollTop = _that.scrollTop;
          timer=requestAnimationFrame(fn)
        }else {
          cancelAnimationFrame(timer);
          _that.setState({
            show: false
          })
        }
      })
  }
  goSearch (path) {
    // console.log(111)
    this.props.history.push(path);
  }
  goCity (path) {
    this.props.history.push(path);
  }
  goDetail (_id) {
    // console.log(222222222)
    // console.log(_id);
    this.props.history.push('/detail/' +_id)
  }
  goOrder (path) {
    this.props.history.push(path);
  }
  render() {
    const data = Array.from(new Array(['美食'],['午餐'],['商超便利'],['水果'],['医药健康'],['浪漫鲜花'],['厨房生鲜'],['甜品饮品'],['签到领红包'],['地方菜系'],['麻辣烫'],['素食简餐'],['地方小吃'],['大牌惠吃'],['米粉面馆'],['包子粥店'],['炸鸡炸串'],['汉堡披萨'],['鸭脖卤味'])).map((_val, i) => ({
      icon: `img/mnue${i}.jpg`,
      text: _val,
    }));
    return (
      <div className="box">
        <div className="content">
          <header className="header" onClick={ this.goCity.bind(this, '/city')} >
            <span className="iconfont icon-dingwei1"></span>
            <i>定位</i>
          </header>
          <div
            className="search"
            onClick={ this.goSearch.bind(this, '/search')}
            style={{position: (this.state.mounting) ? "absolute" : "fixed",top: (this.state.up) ? "0.44rem" : "0"}}
          >
            <input type="text" placeholder="搜索饿了吗商家、商品名称" />
          </div>
          <Grid data={data} activeStyle={false} columnNum={5} isCarousel hasLine={false} />
          <div className="tip">
            <span></span>
            <p>推荐商家</p>
            <span></span>
          </div>
          <List className="foodList" >
            {
              this.state.foodList.map((item, index) => {
                return (
                  <Item key={ index } align="top" thumb={ item.shop_img_url } multipleLine onClick = { this.goDetail.bind(this, item.shop_id) } >
                    { item.name } <Brief>{ item.range }m</Brief>
                  </Item>
                )
              })
            }
          </List>
          <div
            className="iconfont icon-fanhuidingbu"
            style={{display: (this.state.show) ? "block" : "none"}}
            onClick={this.goTop.bind(this)}
          ></div>
          <div
            className="iconfont icon-gouwuche"
            onClick={this.goOrder.bind(this, '/order')}
          ></div>
        </div>
      </div>
    );
  }
}

export default Com;
