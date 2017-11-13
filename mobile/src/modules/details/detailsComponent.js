import React from 'react' 

import './details.scss'

import {Icon,Input,BackTop,Carousel} from 'antd';
const Search = Input.Search;

class detailsComponent extends React.Component {
    render(){
        return(
            <div className="details">
                <div className="detailst-head">
					<Icon type="left" style={{ fontSize: 20, color: '#555555' }} />
					<ul>
						<li>商品</li>
						<li>详情</li>
						<li>评论({0})</li>
					</ul>
					<Icon type="ellipsis"  style={{ fontSize: 20, color: '#555555' }}/>
				</div>
				<div className="details-cont">
					<ul>
						<li>
							<Carousel autoplay>
							    <div><h3>1</h3></div>
							    <div><h3>2</h3></div>
							    <div><h3>3</h3></div>
							    <div><h3>4</h3></div>
							</Carousel>
						</li>
						<li>详情</li>
						<li>评论</li>
					</ul>
				</div>
				<div className="details-footer" style={{height:'800px'}}>
					<ul>
						<li><Icon type="message"  style={{ fontSize: 20, color: '#555555' }}/>客服</li>
						<li><Icon type="star-o"  style={{ fontSize: 20, color: '#555555' }}/>收藏</li>
						<li><Icon type="shopping-cart"  style={{ fontSize: 20, color: '#555555' }}/>购物车</li>
						<li>加入购物车</li>
						<li>立即购买</li>
					</ul>
				</div>
				<div>
				    <BackTop>
				      <div className="ant-back-top-inner"><Icon type="up-circle-o"  style={{ fontSize: 20, color: '#555555' }}/></div>
				    </BackTop>
				 </div>
            </div>
        )
    }
}

export default detailsComponent