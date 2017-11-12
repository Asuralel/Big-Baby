import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'


import Historyback from "../../buycar/HistorybackComponent" 
import orderscss from "./myCollect.scss"
class MyCollectComponent extends React.Component{
    render(){
        return (
            <div className="MyCollect">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>我的收藏</h3>
                </div>
                <div className="collectContent">
                    <div></div>
                    <div>
                        <p>您还没有任何产品呢！</p>
                        <span>看看好货</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyCollectComponent
