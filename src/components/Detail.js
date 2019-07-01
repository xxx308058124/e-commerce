import React, { Component } from 'react';
import Menu from './Menu';
import axios from 'axios';
// import Banner from './Banner';
import  '@/style/detail.scss'
class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      alt: '',
      range: '',
      kind: [],
      allRating: [],
      satisfiedRating: [],
      dissatisfiedRating: [],
      count:'',
      price: false,
      show: true,
      send: 0,
      qiSend: true,
      qiPrice: false,
      balance: true,
      proList: [],
      totalPrice: ''
    }
    this.yiXuan = this.yiXuan.bind(this);
  }
  yiXuan () {
    let totalPrice = 0;
    let send = 15;
    this.state.proList.map(value => {
      totalPrice = totalPrice + value.price;
      send = 15 - totalPrice;
      this.setState({
        totalPrice: totalPrice.toFixed(2),
        send: send
      })
      console.log(this.state.send)
      if (this.state.send < 0) {
        this.setState({
          qiSend: true,
          qiPrice: true,
          balance: false,
        })
      }
    })
    
  }
  getChildData (data, count) {
    // console.log(data.specfoods[0])
    // console.log(count)
    this.state.proList.push(data.specfoods[0])
    // console.log(this.state.proList);
    this.setState({
      count: count*data.specfoods[0].price.toFixed(2),
      price: true,
      show: false,
      qiSend: false,
      qiPrice: true
    })
    this.yiXuan();
  }

  goOrder (path) {
    let foodId = [];
    this.state.proList.map(value => {
      // console.log(value.food_id)
      foodId.push(value.food_id);
      // console.log(foodId);
    })
      var newArr = [];
      //使用set进行数组去重
      newArr = [...new Set(foodId)];
      var newarr2 = new Array(newArr.length);
      for(var t = 0; t < newarr2.length; t++) {
        newarr2[t] = 0;
      }
      for(var p = 0; p < newArr.length; p++) {
        for(var j = 0; j < foodId.length; j++) {
          if(newArr[p] == foodId[j]) {
            newarr2[p]++;
          }
        }
      }
      for(var m = 0; m < newArr.length; m++) {
        // console.log(newArr[m] + "重复的次数为：" + newarr2[m]);
        var params = new URLSearchParams();
        params.append('username', sessionStorage.getItem('userName'));
        params.append('food_id', newArr[m]);
        params.append('num', newarr2[m]);
        axios.post('http://10.8.161.47:3000/users/addgoods', params)
          .then(res => {
            // console.log(res);
            this.props.history.push(path);
          })
      }
  }

  componentDidMount () {
    // console.log(this.props)
    // console.log(this.state.kind)
    // console.log('detail', this)
    // console.log(this.props.match.params)
    var id = String(this.props.match.params.id)
    // console.log(id)
    fetch(`http://10.8.161.47:3000/foods/shopdetails?shop_id=` + id)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          name: data[0].name,
          img: data[0].shop_img_url,
          alt: data[0].alt,
          range: data[0].range,
          kind: data[0].food,
          allRating:data[0].all_rating,
          satisfiedRating:data[0].satisfied_rating,
          dissatisfiedRating:data[0].dissatisfied_rating
        })
        // console.log(this.state.kind)
      })
      .catch(err => console.log(err));
  }
  goBack () {
  this.props.history.go(-1)
  }
  render() {
    return (
      <div className="detailBox">
        <div className="content">
          <div className="detailContent">
            <div className="into">
              <div className="detailHeader">
                <span className="iconfont icon-fanhui " onClick= { this.goBack.bind(this) } ></span>
              </div> 
              <div className="img" >
                <img src={ this.state.img } alt=" " />
              </div>
              <div className="into0">
                <h2 className="into-title">{ this.state.name }</h2>
                <div className="into2">
                  <div className="into2-evaluate">评价4.3</div>
                  <div classNam="into2-sales">月售{ this.state.range }单</div>
                  <div className="into2-time">蜂鸟快送约44分钟</div>
                </div>
                <div className="into3">
                  <div className="into3-m">满减</div>
                  <div className="into3-acti">满10减8，满25减15，满40减23，满60减31</div>
                  <div className="into3-discounts">6个优惠</div>
                </div>
                <div className="into4">
                  <span className="notice">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</span>
                </div>
              </div>
            </div>
            <Menu
              dissatisfiedRating={ this.state.dissatisfiedRating }
              satisfiedRating={ this.state.satisfiedRating }
              allRating={ this.state.allRating }
              abc={ this.state.kind }
              fn = { this.getChildData.bind(this) }
            ></Menu>
          </div>
        </div>
        <div className="detailFooter">
          <div className="tubiao">
            <span className="iconfont icon-gouwuche"></span>
          </div>
          <div className="fPrice" style = {{ display: (this.state.price) ? "block" : "none" }} >￥{ this.state.totalPrice }</div>
          <div className="foodPrice" style = {{ display: (this.state.show) ? "block" : "none" }} >未选购商品</div>
          <h2 className="qiPrice" style = {{ display: (this.state.qiPrice) ? "none" : "block" }} >￥15元起送</h2>
          <h2 className="qiSend" style = {{ display: (this.state.qiSend) ? "none" : "block" }} >还差{ this.state.send }元起送</h2>
          <h2 
            className="balance"
            style = {{ display: (this.state.balance) ? "none" : "block" }}
            onClick={this.goOrder.bind(this, '/order')}
          >去结算
          </h2>
        </div>
      </div>
      );
    }
  } 
  export default Detail;