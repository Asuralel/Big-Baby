import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'
import {Icon } from 'antd';


import Historyback from "../../buycar/HistorybackComponent" 
import assSecurcss from "./accSecuity.scss"
class AccSevurity extends React.Component{
    render(){
        return (
            <div className="accSecu">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>设置</h3>
                </div>
                <div className="accContent">
                    <div>
                        <span><Icon type="mobile" style={{ fontSize: 20, color: '#FF9C00'}} />&nbsp;&nbsp;手机</span>
                        <span className="lastSpan">
                            1888888****
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span><Icon type="key" style={{ fontSize: 20, color: '#58bc58'}}/>&nbsp;&nbsp;登录密码</span>
                        <span className="lastSpan">
                            设置
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span><Icon type="shop" style={{ fontSize: 20, color: '##2FB4F7'}}/>&nbsp;&nbsp;交易密码</span>
                        <span className="lastSpan">
                            设置
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span><Icon type="layout" style={{ fontSize: 20, color: '#B67DE6'}}/>&nbsp;&nbsp;绑定银行卡</span>
                        <span className="lastSpan">
                            
                        </span>
                        <Icon type="right" />
                    </div>
                </div>
            </div>
        )
    }
}
export default AccSevurity


