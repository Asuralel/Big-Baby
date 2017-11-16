import React from 'react'
import Reacr from 'react-dom'
import {Link} from 'react-router'

import './footer.scss'
import {Icon } from 'antd';

class footerComponent extends React.Component {
    handleClick(event){
        event.target.parentNode.style.color="red"
    }
    render(){
        return(
            <div className="com-footer">
            	<ul>
            		<li onClick={this.handleClick.bind(this)} className="cc"><Link to="/home"><Icon type="home" / ><span  ref="style1">首页</span></Link></li>
            		<li onClick={this.handleClick.bind(this)}><Link to="/sort"><Icon type="bars"/><span>分类</span></Link></li>
            		<li onClick={this.handleClick.bind(this)}><Link to="/buycar"><Icon type="shopping-cart"/><span>购物车</span></Link></li>
            		<li onClick={this.handleClick.bind(this)}><Link to="/my/myHome"><Icon type="user"/><span>我的</span></Link></li>
            	</ul>
            </div>
        )
    }
}

export default footerComponent