import React from 'react'
import {Link} from 'react-router'

import './home.scss'
import { Affix,Icon } from 'antd';

class homeComponent extends React.Component {
    render(){
        return(
            <div className="home">
                首页
                <div className="home-footer">
                	<ul>
                		<li><Link to="/home"><Icon type="home" style={{ fontSize: 16, color: '#08c',display:'block' }} /><span>首页</span></Link></li>
                		<li><Link to="/sort"><Icon type="bars" style={{ fontSize: 16, color: '#08c',display:'block' }} /><span>分类</span></Link></li>
                		<li><Link to="/buycar"><Icon type="shopping-cart" style={{ fontSize: 16, color: '#08c',display:'block' }} /><span>购物车</span></Link></li>
                		<li><Link to="/my"><Icon type="user" style={{ fontSize: 16, color: '#08c',display:'block' }} /><span>我的</span></Link></li>
                	</ul>
                </div>
            </div>
        )
    }
}

export default homeComponent