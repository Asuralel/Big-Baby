import React from 'react'
import {connect} from "react-redux"
import {Link,hashHistory} from 'react-router'
import {Icon } from 'antd';

import * as MysetActions from "./mysetAction"
import Historyback from "../../buycar/HistorybackComponent" 
import mysetcss from "./myset.scss";
var baseURI = "/src/asset/"
class MySetComponent extends React.Component{
    componentDidMount(){
        // console.log(JSON.parse(this.props.show).username)
        this.props.mysetinit(JSON.parse(this.props.show).username)
        console.log(this.props.myMsg)
    }
    clickto(){
        
        hashHistory.push("/my/mySet/address")
    }
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
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>昵称</span>
                        <span className="lastSpan">
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>性别</span>
                        <span className="lastSpan">
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>账户名</span>
                        <span className="lastSpan">
                        </span>
                        <Icon type="right" />
                    </div>
                    <div className="address" onClick={this.clickto}>
                        <span>收货地址</span>
                        <span className="lastSpan">
                        </span>
                        <Icon type="right" />
                    </div>
                </div>
            </div>
        )
    }
}

const MyState = function(state){
    return {
        show:state.login.data,
        myMsg:state.myset.myMsg
    }
}
export default connect(MyState, MysetActions)(MySetComponent)