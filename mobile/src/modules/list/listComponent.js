import React from 'react';
import {Link} from 'react-router'


import {Icon,Input} from 'antd';
const Search = Input.Search;

class listComponent extends React.Component {
    render(){
        return(
            <div className="list">
                <div className="list-head">
					<div className="list-search">
						<Icon type="left" style={{ fontSize: 20, color: '#555555' }} />
						<Search placeholder="请输入搜索关键字" style={{ width: 200 }} onSearch={value => console.log(value)} />
						<Link to="/sort" className="to-sort"><Icon type="bars"  style={{ fontSize: 20, color: '#555555' }}/>分类</Link>
						<Icon type="ellipsis"  style={{ fontSize: 20, color: '#555555' }}/>
					</div>
					<div className="list-filter">
						<ul>
							<li>综合</li>
							<li>销量</li>
							<li>价格<Icon type="caret-up" /><Icon type="caret-down" /></li>
							<li>筛选</li>
							<li><Icon type="menu-unfold" /><Icon type="menu-fold" /></li>
						</ul>
					</div>
				</div>
				<div className="list-cont">
					<ul>
						<li>根据筛选条件动态生成</li>
					</ul>
				</div>
            </div>
        )
    }
}

export default listComponent