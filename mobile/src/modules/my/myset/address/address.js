import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'
import {Icon } from 'antd';

import * as MyaddressAtions from "./addressAction"
import Historyback from "../../../buycar/HistorybackComponent" 
import myaddress from "./address.scss";

class MyaddressComponent extends React.Component{
    componentWillMount(){
        this.props.loginInit().then(response=>{
            console.log(response)
        })
    }
    
    render(){
        return (
            <div className="Myaddress">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>收货地址</h3>
                </div>
                <div className="setContent">
                    <Link to="/my/mySet/edit"><div className="addAddress">
                        <span><Icon type="plus-circle" />&nbsp;&nbsp;添加收货地址</span>
                    </div></Link>
                    <div className="addressMsg">
                        <div>
                            <div>
                                <div>
                                    <span>laughing</span>
                                    <span>1888888888</span>
                                </div>
                                <p>收货地址<span>北京天安门</span></p>
                            </div>
                            <div><span><Icon type="delete" />删除</span><span className="addressEdit"><Icon type="edit" />修改</span></div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <span>laughing</span>
                                    <span>1888888888</span>
                                </div>
                                <p>收货地址<span>北京天安门</span></p>
                            </div>
                            <div><span><Icon type="delete" />删除</span><span><Icon type="edit" />修改</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MyState = function(state){
    return {
        token:state.login.data,
    }
}
export default connect(MyState, MyaddressAtions)(MyaddressComponent)