import React from 'react' 


import {Icon,Input} from 'antd';
const Search = Input.Search;

class listComponent extends React.Component {
    render(){
        return(
            <div className="list">
                <div className="list-head">
					<Icon type="left" style={{ fontSize: 20, color: '#555555' }} />
					<Search placeholder="请输入搜索关键字" style={{ width: 200 }} onSearch={value => console.log(value)} />
					<Icon type="ellipsis"  style={{ fontSize: 20, color: '#555555' }}/>
				</div>
				<div className="list-cont">
					列表页
				</div>
            </div>
        )
    }
}

export default listComponent