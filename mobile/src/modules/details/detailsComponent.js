//react相关
import React from 'react'
import {Link} from 'react-router'

//第三方
import {Icon,Input,BackTop,Carousel} from 'antd';
const Search = Input.Search;


//自定义
import './details.scss'
import Hbicon from '../buycar/HistorybackComponent.js'
import LinksMask from '../common/linksMask/linksMaskComponent.js'
import SplitGap from '../common/splitGap/splitGap.js'


class detailsComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	isShowLinks:'none', //linksMaskComponent.js：公共模块导航相关属性
        	goodDetail:{
        		good:{
        			imgArr:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414095163293_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414098391572_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414101449903_360.jpg'
        			],
        			name:'克罗德曼 布艺/松木框架 床架 AFB-607',
        			nowPrice:7800,
        			oldPrice:9800,
        			sellNum:356
        		},
        		desc:{
        			imgArr:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222234151228_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222246543956_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222255069538_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222250796516_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222238667729_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222242553886_1280.jpg'
        			]
        		},
        		ratings:{
        			typeArr:['全部评价','满意','一般','不满意','晒图'],
        			ratingList:[{
        				iconType:'1',
        				name:'18814098979',
        				time:1510640593567,
        				starNum:4,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18816678979',
        				time:1510640578567,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        						'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18814023979',
        				time:1510646793567,
        				starNum:5,
        				text:'款式很喜欢',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18845798979',
        				time:1510640593567,
        				starNum:5,
        				text:'喜欢',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'1566798979',
        				time:1510646793567,
        				starNum:3,
        				text:'还好吧',
        				goodImgs:[
        				]
        			},{
        				iconType:'1',
        				name:'15614598979',
        				time:1510640673567,
        				starNum:1,
        				text:'不好',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18818998979',
        				time:1510640593567,
        				starNum:5,
        				text:'款式很喜欢，以后来大宝家具买可以放心了',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        						'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18889798979',
        				time:1518940593567,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18819098979',
        				time:1510640573567,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18816698979',
        				time:1510645593567,
        				starNum:2,
        				text:'款式还不错',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        						'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18816788979',
        				time:1510625593567,
        				starNum:1,
        				text:'款式很low',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18817098979',
        				time:1510640673567,
        				starNum:3,
        				text:'款式很一般呀',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18867798979',
        				time:1519640593567,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        						'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			}]
        		}
        	}
        }
    }
	//linksMaskComponent.js：公共模块导航相关方法
	showLinks(){
		this.setState({
			isShowLinks:'block'
		});
	}
	hideLinks(){
		this.setState({
			isShowLinks:'none'
		});
	}
	
	
	
	//详情页自身相关模块
	componentWillMount(){
		console.log('商品Id',this.props.location.state);
		this.setState({
			detailGood:this.state.goodDetail.good,
			detailDesc:this.state.goodDetail.desc,
			detailRatings:this.state.goodDetail.ratings,
			showIndex:'block'
		});
	}
	componentDidMount(){
		console.log(1,this.refs.indexCont)
//		this.refs.indexCont.click();
	}
	componentDidMount(){
		let lis = this.refs.tabList.querySelectorAll('li');
		lis.forEach((item) => {
			item.className = ' ';
		});
		if(this.props.location.pathname === "/details/detailsDesc"){
			lis[1].className = 'current';
			this.setState({showIndex:'none'})
		}else if(this.props.location.pathname === "/details/detailsRating"){
			lis[2].className = 'current';
			this.setState({showIndex:'none'})
		}else{
			lis[0].className = 'current';
			this.setState({showIndex:'block'})
		}
	}
	changeTab(idx){
		let lis = this.refs.tabList.querySelectorAll('li');
		if(idx === 0){
			this.setState({showIndex:'block'})
		}else{
			this.setState({showIndex:'none'})
		}
		lis.forEach((item,index) => {
			if(index === idx){
				item.className = 'current';
			}else{
				item.className = ' ';
			}
		})
	}
	changeFavor(){
		let favor = this.refs.favorLi;
		if(favor.className === "add-favor has-favor"){
			favor.className = "add-favor";
		}else{
			favor.className = "add-favor has-favor";
		}
	}
    render(){
        return(
            <div className="details">
                <div className="detailst-head">
                	<Hbicon className="sort-hb"/>
					<ul className="sort-sh" ref="tabList">
						<li className="current" onClick={this.changeTab.bind(this,0)}><Link to="/details/">商品</Link></li>
						<li onClick={this.changeTab.bind(this,1)}><Link to={{pathname:"/details/detailsDesc",state:this.state.detailDesc}}>详情</Link></li>
						<li onClick={this.changeTab.bind(this,2)}><Link to={{pathname:"/details/detailsRating",state:this.state.detailRatings}}>评价</Link></li>
					</ul>
					<Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
				</div>
				{/*主要内容*/}
				<div className="details-cont">
					<div style={{display:this.state.showIndex}} className="details-good" id="detailsGood">
						<Carousel autoplay className="img-list">
							{
								this.state.detailGood.imgArr.map((img,idx) => {
									return (<div key={idx}><img src={img} /></div>)
								})
							}
						</Carousel>
						<p className="text">{this.state.detailGood.name}</p>
						<div className="extra">
							<div className="price">
								<span className="now-price">￥{this.state.detailGood.nowPrice}</span>
								{this.state.detailGood.oldPrice ? <span className="old-price">￥{this.state.detailGood.oldPrice}</span> : null}
							</div>
							<div className="sell-num">已售 {this.state.detailGood.sellNum}</div>
						</div>
						<SplitGap />
						<div className="others">
							<span><Icon type="check-circle-o" />发货&售后服务</span>
							<span><Icon type="check-circle-o" />45天退货</span>
							<span><Icon type="check-circle-o" />质保一年</span>
							<span><Icon type="check-circle-o" />贵就赔</span>
						</div>
					</div>
					{this.props.children}
				</div>
				{/*底部内容*/}
				<div className="details-footer">
					<ul>
						<li className="to-home"><Link to="/home"><Icon type="home"  style={{ fontSize: 20, color: '#555555' }}/>首页</Link></li>
						<li className="add-favor" onClick={this.changeFavor.bind(this)} ref="favorLi"><Icon type="star-o"  style={{ fontSize: 20, color: '#555555' }}/><Icon type="star"  style={{ fontSize: 20, color: '#FFCE42' }}/><span>收藏</span></li>
						<li className="cart-list"><Link to="/buycar"><Icon type="shopping-cart"  style={{ fontSize: 20, color: '#555555' }}/>购物车</Link></li>
					</ul>
					<ul>
						<li className="add-cart">加入购物车</li>
						<li className="buy-now">立即购买</li>
					</ul>
				</div>
				{/*其它内容*/}
				<LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={-1} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
				<BackTop style={{right:0,bottom:'50px'}}>
			      <div className="ant-back-top-inner"><Icon type="up-circle-o"  style={{ fontSize: 28, color: '#555555',backgroundColor:'#fff',borderRadius:'50%' }}/></div>
			    </BackTop>
            </div>
        )
    }
}

export default detailsComponent