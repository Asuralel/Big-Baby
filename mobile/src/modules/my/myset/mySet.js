import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'
import {Icon } from 'antd';


import Historyback from "../../buycar/HistorybackComponent" 
import mysetcss from "./myset.scss"
class MySetComponent extends React.Component{
    render(){
        return (
            <div className="MySet">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>设置</h3>
                </div>
                <div className="setContent">
                    <div>
                        <span>头像</span>
                        <span className="lastSpan">
                            <img src="/src/asset/setheader.jpg"/>
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>昵称</span>
                        <span className="lastSpan">
                            少时诵诗书
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>性别</span>
                        <span className="lastSpan">
                            保密
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>账户名</span>
                        <span className="lastSpan">
                            laughing
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>收货地址</span>
                        <span className="lastSpan">
                            添加
                        </span>
                        <Icon type="right" />
                    </div>
                </div>
            </div>
        )
    }
}
export default MySetComponent
