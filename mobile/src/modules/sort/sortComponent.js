import React from 'react' 


import {Icon,Input} from 'antd';
const Search = Input.Search;

class sortComponent extends React.Component {
    render(){
        return(
            <div className="sort">
                <div className="sort-head">
					<Icon type="left" style={{ fontSize: 20, color: '#555555' }} />
					<Search placeholder="请输入搜索关键字" style={{ width: 200 }} onSearch={value => console.log(value)} />
					<Icon type="ellipsis"  style={{ fontSize: 20, color: '#555555' }}/>
				</div>
				<div className="sort-cont">
					<div className="left-menu">
						<ul>
							<li>循环遍历生成</li>
							<li>卧室</li>
							<li className="current">客厅</li>
						</ul>
					</div>
					<div className="right-list">
						<ul>
							<li>右边商品列表:每次都请求数据动态生成</li>
						</ul>
					</div>
				</div>
            </div>
        )
    }
}

export default sortComponent