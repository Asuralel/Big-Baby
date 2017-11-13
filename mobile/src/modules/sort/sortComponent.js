//react系列
import React from 'react';
import {Link} from 'react-router'

//第三方系列
import {Icon,Input} from 'antd';
const Search = Input.Search;

//自定义系列
import './sort.scss'
import Hbicon from '../buycar/HistorybackComponent.js'
import LinksMask from '../common/linksMask/linksMaskComponent.js'

class sortComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	isShowLinks:'none',//linksMaskComponent.js：公共模块导航相关属性
        	goodTypeList:[{
        		name:'卧室',
        		type:'0',
        		goodTypes:[{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        			text:'床架1',
        			goodType:0
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        			text:'床架2',
        			goodType:1
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        			text:'床架3',
        			goodType:2
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_240.jpg',
        			text:'床架4',
        			goodType:3
        		}]
        	},{
        		name:'家居日用',
        		type:'1',
        		goodTypes:[{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5349/5349_05205115663544812_240.jpg',
        			text:'衣柜1',
        			goodType:4
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5349/5349_05205115663544812_240.jpg',
        			text:'衣柜2',
        			goodType:5
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5349/5349_05205115663544812_240.jpg',
        			text:'衣柜3',
        			goodType:6
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/5349/5349_05205115663544812_240.jpg',
        			text:'衣柜4',
        			goodType:7
        		}]
        	},{
        		name:'书房',
        		type:'2',
        		goodTypes:[{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8762/8762_05258712452911696_240.jpg',
        			text:'办公文件柜1',
        			goodType:8
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8762/8762_05258712452911696_240.jpg',
        			text:'办公文件柜2',
        			goodType:9
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8762/8762_05258712452911696_240.jpg',
        			text:'办公文件柜3',
        			goodType:10
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8762/8762_05258712452911696_240.jpg',
        			text:'办公文件柜4',
        			goodType:11
        		}]
        	},{
        		name:'定制家具',
        		type:'3',
        		goodTypes:[{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8746/8746_05237315789360059_240.jpg',
        			text:'玻璃门板1',
        			goodType:12
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8746/8746_05237315789360059_240.jpg',
        			text:'玻璃门板2',
        			goodType:13
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8746/8746_05237315789360059_240.jpg',
        			text:'玻璃门板3',
        			goodType:14
        		},{
        			img:'http://www.mallvv.com/data/upload/shop/store/goods/8746/8746_05237315789360059_240.jpg',
        			text:'玻璃门板4',
        			goodType:15
        		}]
        	}]
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
	
	
	changeGoodType(arr,event){
//		console.log(arr,this.refs.rightList,event.target)
		//给左侧点击添加聚焦类名
		var lis = document.querySelectorAll('#leftMenu li');
		lis.forEach((item) => {
			item.className = '';
		});
		event.target.className = 'left-menu-cur-li';
		//动态生成右侧对应列表
		let rightListHtml = arr.map((item) => {
			return `<li><a href="#/list/:${item.goodType}"><img src="${item.img}" /><span>${item.text}</span></a></li>`;
		}).join('');
		this.refs.rightList.innerHTML = rightListHtml;
	}
	//默认显示第一个商品类别
	componentDidMount(){
		document.querySelector('#leftMenu li').click();
	}
	
    render(){
        return(
            <div className="sort">
                <div className="sort-head">
					<Hbicon className="sort-hb"/>
					<Search className="sort-sh" placeholder="请输入搜索关键字" onSearch={value => console.log(value)} />
					<Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
				</div>
				<div className="sort-cont">
					<div className="left-menu" id="leftMenu">
						<ul>
							{
								this.state.goodTypeList.map(function(item,idx){
									return <li key={idx} onClick={this.changeGoodType.bind(this,item.goodTypes)}>{item.name}</li>
								}.bind(this))
							}
						</ul>
					</div>
					<ul className="right-list" ref="rightList">
						
					</ul>
				</div>
				<LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={1} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
            </div>
        )
    }
}

export default sortComponent