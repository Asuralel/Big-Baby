import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'
import {Icon } from 'antd';

import * as MysetActions from "./mysetAction"
import Historyback from "../../buycar/HistorybackComponent" 
import mysetcss from "./myset.scss";
var baseURI = "/src/asset/"
class MySetComponent extends React.Component{
    componentDidMount(){
        this.props.mysetinit(JSON.parse(this.props.show).username)
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
                            <img src={baseURI+this.props.myMsg.handimgs}/>
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>昵称</span>
                        <span className="lastSpan">
                           {this.props.myMsg.username}
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>性别</span>
                        <span className="lastSpan">
                            {this.props.myMsg.gender}
                        </span>
                        <Icon type="right" />
                    </div>
                    <div>
                        <span>账户名</span>
                        <span className="lastSpan">
                            {this.props.myMsg.account}
                        </span>
                        <Icon type="right" />
                    </div>
                    <div className="address"><Link to="/my/mySet/address">
                        <span>收货地址</span>
                        <span className="lastSpan">
                            {this.props.myMsg.address}
                        </span>
                        <Icon type="right" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const MyState = function(state){
    return {
        show:state.login.data,
        myMsg:state.myset.myMsg?JSON.parse(state.myset.myMsg):null
    }
}
export default connect(MyState, MysetActions)(MySetComponent)