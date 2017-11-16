//react系列
import React from 'react';
import {Link,hashHistory} from 'react-router'

//第三方系列
import {Icon,Input,BackTop} from 'antd';
const Search = Input.Search
import httpAjax from "superagent"

//自定义系列
import './list.scss'
import Hbicon from '../buycar/HistorybackComponent.js'
import LinksMask from '../common/linksMask/linksMaskComponent.js'
import Loading from '../common/loading/loadingComponent.js'
import {IMGURL} from '../common/commonUrl.js'

class listComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	isShowLinks:'none', //linksMaskComponent.js：公共模块导航相关属性
        	showLoading:false	//loadingComponent.js：公共模块导航相关属性
        /*	goodList:[{
        		goodId:'1',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'克罗德曼 布艺/松木框架 床架 AFB-607',
        		sellNum:96,
        		nowPrice:7800
        	},{
        		goodId:'2',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'凯纳豪迪 柚木 移门衣柜 2012-A',
        		sellNum:78,
        		nowPrice:9800,
        		oldPrice:10000
        	},{
        		goodId:'3',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'全能BMG8002系列文件柜大型全钢办公文件柜档案柜带锁抽屉',
        		sellNum:46,
        		nowPrice:2100,
        		oldPrice:2400
        	},{
        		goodId:'4',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'欧卡诺定制不锈钢台面 酒红色 玻璃门板',
        		sellNum:56,
        		nowPrice:1780,
        		oldPrice:2340
        	},{
        		goodId:'5',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'克罗德曼 布艺/松木框架 床架 AFB-607',
        		sellNum:43,
        		nowPrice:6500,
        		oldPrice:7110
        	},{
        		goodId:'6',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'凯纳豪迪 柚木 移门衣柜 2012-A',
        		sellNum:38,
        		nowPrice:2800,
        		oldPrice:3000
        	},{
        		goodId:'7',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'全能BMG8002系列文件柜大型全钢办公文件柜档案柜带锁抽屉',
        		sellNum:92,
        		nowPrice:1900,
        		oldPrice:2200
        	},{
        		goodId:'8',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'欧卡诺定制不锈钢台面 酒红色 玻璃门板',
        		sellNum:124,
        		nowPrice:1290,
        		oldPrice:2000
        	},{
        		goodId:'9',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'克罗德曼 布艺/松木框架 床架 AFB-607',
        		sellNum:1,
        		nowPrice:9100,
        		oldPrice:10010
        	},{
        		goodId:'10',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'凯纳豪迪 柚木 移门衣柜 2012-A',
        		sellNum:2,
        		nowPrice:800,
        		oldPrice:1000
        	},{
        		goodId:'11',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'全能BMG8002系列文件柜大型全钢办公文件柜档案柜带锁抽屉',
        		sellNum:78,
        		nowPrice:2900,
        		oldPrice:3200
        	},{
        		goodId:'12',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'欧卡诺定制不锈钢台面 酒红色 玻璃门板',
        		sellNum:189,
        		nowPrice:1990,
        		oldPrice:2370
        	},{
        		goodId:'13',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'克罗德曼 布艺/松木框架 床架 AFB-607',
        		sellNum:45,
        		nowPrice:1900,
        		oldPrice:2210
        	},{
        		goodId:'14',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'凯纳豪迪 柚木 移门衣柜 2012-A',
        		sellNum:78,
        		nowPrice:6800,
        		oldPrice:7000
        	},{
        		goodId:'15',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'全能BMG8002系列文件柜大型全钢办公文件柜档案柜带锁抽屉',
        		sellNum:6,
        		nowPrice:2800,
        		oldPrice:2900
        	},{
        		goodId:'16',
        		img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        		name:'欧卡诺定制不锈钢台面 酒红色 玻璃门板',
        		sellNum:147,
        		nowPrice:180,
        		oldPrice:240
        	}]
        */
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
	
	
	//列表页自身模块
	//请求数据
	componentWillMount(){
//		console.log(this.props.params.goodType);
		//loading模块
		this.setState({showLoading:true});
		let query = "";
		if(this.props.params.goodType.indexOf('s-') >= 0){
			query = "?type=listName&value="+this.props.params.goodType.split('s-')[1];
		}else{
			query = "?type=listType&value="+this.props.params.goodType.split(':')[1];
		}
		httpAjax.get("http://localhost:4444/api/mobile/sort/product.php"+query).then((res) => {
			let resObj = JSON.parse(res.text);
//			console.log(resObj);
			this.setState({
				goodList:JSON.parse(res.text),
				defaultGoodList:JSON.parse(res.text),
				showLoading:false
			});
		});
	}
	componentWillReceiveProps(nextProps) {
     if(nextProps.params.goodType && nextProps.params.goodType != this.props.params.goodType) {
     	this.setState({showLoading:true});
        let query = "?type=listName&value="+nextProps.params.goodType.split('s-')[1];
        httpAjax.get("http://localhost:4444/api/mobile/sort/product.php"+query).then((res) => {
			let resObj = JSON.parse(res.text);
			this.setState({
				goodList:JSON.parse(res.text),
				defaultGoodList:JSON.parse(res.text),
				showLoading:false
			});
			this.defaultList(0);
		});
     } 
  }
//	componentDidMount(){
//		this.setState({
//			defaultGoodList:this.state.goodList
//		});
//	}
	defaultList(idx,e){
		this.setState({
			goodList:this.state.goodList.sort((a,b) => {return a.Id - b.id})
		});
		let li = null;
		this.refs.filterList.querySelectorAll('li').forEach((item,index) => {
			if(index === 3){return;}
			if(idx === index){
				li = item;
			}else{
				item.className = " ";
			}
		});
		li.className = "current";
	}
	sellNumList(idx,e){
		this.setState({
			goodList:this.state.goodList.sort((a,b) => {return b.product_sold_out - a.product_sold_out})
		});
		let li = null;
		this.refs.filterList.querySelectorAll('li').forEach((item,index) => {
			if(index === 3){return;}
			if(idx === index){
				li = item;
			}else{
				item.className = " ";
			}
		});
		li.className = "current";
	}
	sellPriceList(idx,e){
		let li = null;
		this.refs.filterList.querySelectorAll('li').forEach((item,index) => {
			if(index === 3){return;}
			if(idx === index){
				li = item;
			}else{
				item.className = " ";
			}
		});
		if(li.className.indexOf('up') >= 0){
			li.className = "current price-down";
			this.setState({
				goodList:this.state.goodList.sort((a,b) => {return b.product_price*b.product_discount - a.product_price*a.product_discount})
			});
		}else{
			li.className = "current price-up";
			this.setState({
				goodList:this.state.goodList.sort((a,b) => {return a.product_price*a.product_discount - b.product_price*b.product_discount})
			});
		}
	}
	listStyleType(idx,e){
		let li = this.refs.filterList.querySelectorAll('li')[idx];
		if(this.refs.goodList.className === 'list-type'){
			this.refs.goodList.className = '';
			li.className = "";
		}else{
			this.refs.goodList.className = 'list-type'
			li.className = "current";
		}
	}
    render(){
        return(
            <div className="list">
                <div className="list-head">
					<div className="list-search">
						<Hbicon className="sort-hb"/>
						<Search className="sort-sh" placeholder="请输入搜索关键字" onSearch={value => value.trim()===''?null:hashHistory.push("/list/:s-"+value)} />
						<Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
					</div>
					<div className="list-filter">
						<ul ref="filterList">
							<li onClick={this.defaultList.bind(this,0)} className="current">综合</li>
							<li onClick={this.sellNumList.bind(this,1)}>销量</li>
							<li onClick={this.sellPriceList.bind(this,2)}>价格<Icon type="caret-up" className="icon-up"/><Icon type="caret-down"  className="icon-down"/></li>
							{/*<li>筛选</li>   后期再添加完善*/}
							<li onClick={this.listStyleType.bind(this,3)}><Icon type="menu-unfold"  className="icon-unfold"/><Icon type="menu-fold"  className="icon-fold"/></li>
						</ul>
					</div>
				</div>
				<div className="list-cont">
					<ul ref="goodList">
						{
							!this.state.goodList?null:!this.state.goodList.length?<div className="none-goods"><img src={IMGURL+"buycar.png"} /><p>抱歉，没有找到符合条件的商品</p></div>:this.state.goodList.map((item,idx) => {
								return (
									<li key={idx}>
										<Link to={{pathname:'/details/',state:item.id}}>
										<div className="img"><img src={item.product_image} /></div>
										<div className="text">
											<span className="now-price">￥{(item.product_price*item.product_discount).toFixed(0)}</span>
											{item.product_discount !== '1'? (<span className="old-price">￥{item.product_price}</span>):null}
											<p className="desc">{item.product_name}</p>
											<p className="sell-num">已售{item.product_sold_out}</p>
										</div>
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
				<LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={-1} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
			    <BackTop style={{right:0,bottom:0}}>
			      <div className="ant-back-top-inner"><Icon type="up-circle-o"  style={{ fontSize: 28, color: '#555555',backgroundColor:'#fff',borderRadius:'50%' }}/></div>
			    </BackTop>
			    <Loading showLoading={this.state.showLoading}/>
            </div>
        )
    }
}

export default listComponent