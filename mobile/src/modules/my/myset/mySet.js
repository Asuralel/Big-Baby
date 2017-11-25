import React from 'react'
import {connect} from "react-redux"
import {Link,hashHistory} from 'react-router'
import {Icon } from 'antd';

import * as MysetActions from "./mysetAction"
import Historyback from "../../buycar/HistorybackComponent" 
import mysetcss from "./myset.scss";
var baseURI = "/src/asset/"
class MySetComponent extends React.Component{
    
    componentWillMount(){
        this.props.loginInit().then(response=>{
            this.props.mysetinit(JSON.parse(response).username)
        })
    }
    componentDidMount(){
    }
    clickto(){
        
        hashHistory.push("/my/mySet/address")
    }
    render(){
        
        if(this.props.myMsg){
            let show = JSON.parse(this.props.myMsg)
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
                            <img src={baseURI+show.handimgs}/>
                            </span>
                            <Icon type="right" />
                        </div>
                        <div>
                            <span>用户名</span>
                            <span className="lastSpan">
                            {show.username}
                            </span>
                            <Icon type="right" />
                        </div>
                        <div>
                            <span>性别</span>
                            <span className="lastSpan">
                            {show.gender}
                            </span>
                            <Icon type="right" />
                        </div>
                        <div>
                            <span>个性签名</span>
                            <span className="lastSpan">
                            {show.sign}
                            </span>
                            <Icon type="right" />
                        </div>
                        <div className="address" onClick={this.clickto}>
                            <span>收货地址</span>
                            <span className="lastSpan">
                            添加更多
                            </span>
                            <Icon type="right" />
                        </div>
                    </div>
                </div>
            )
        }else{
            return <div>
                            
            出错了 <Link><Historyback /></Link>
            </div>
        }
    }
}

const MyState = function(state){
    return {
        show:state.login.data,
        myMsg:state.myset.myMsg
    }
}
export default connect(MyState, MysetActions)(MySetComponent)