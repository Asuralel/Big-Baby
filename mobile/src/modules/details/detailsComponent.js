import React from 'react' 


import {Icon,Input} from 'antd';
const Search = Input.Search;

class detailsComponent extends React.Component {
    render(){
        return(
            <div className="details">
                <div className="detailst-head">
					<Icon type="left" style={{ fontSize: 20, color: '#555555' }} />
					<Search placeholder="请输入搜索关键字" style={{ width: 200 }} onSearch={value => console.log(value)} />
					<Icon type="ellipsis"  style={{ fontSize: 20, color: '#555555' }}/>
				</div>
				<div className="details-cont">
					详情页
				</div>
            </div>
        )
    }
}

export default detailsComponent