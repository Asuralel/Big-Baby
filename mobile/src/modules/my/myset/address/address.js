import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'
import {Icon } from 'antd';

import * as MyaddressAtions from "./addressAction"
import Historyback from "../../../buycar/HistorybackComponent" 
import myaddress from "./address.scss";
class MyaddressComponent extends React.Component{
    componentDidMount(){

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
                    
                </div>
            </div>
        )
    }
}

const MyState = function(state){
    return {

    }
}
export default connect(MyState, MyaddressAtions)(MyaddressComponent)