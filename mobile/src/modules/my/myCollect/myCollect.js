import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'

import Historyback from "../../buycar/HistorybackComponent"; 
import orderscss from "./myCollect.scss";
import * as collectAction from "./mycollectAction";
import {Icon } from 'antd';

var baseURI = './src/asset/product/';
class MyCollectComponent extends React.Component{
    // componentWillMount(){
        
    //     if(this.props.show){
    //         this.props.collectGoods(JSON.parse(this.props.show).username);
    //     }
    // }
    componentWillMount(){
        var data = JSON.parse(this.props.show)
        let goodsId=data.user_collect.split(',').splice(0)
        console.log(goodsId)
        this.props.collectGoods(JSON.stringify(goodsId)).then(response=>{
            var res = JSON.parse(response);
            for(var i = 0 ; i<res.length;i++){

            }
        })

    }
    render(){
        console.log()
        if(this.props.goodsdata){
            let data = JSON.parse(this.props.goodsdata)
            return (
                <div className="MyCollect">
                    <div className="personalHead">
                        <div>
                            <Historyback />
                        </div>
                        <h3>我的收藏</h3>
                    </div>
                    <div className="collectContent1">
                    {
                        data.map(function(item, index){
                            return (

                                <div className="collectgoods">
                                    <div><img src={baseURI+item.product_image}/></div>
                                    <div>
                                        <div>{item.product_name}</div>
                                        <div>
                                            <span>￥{item.product_origin_price}</span>
                                            <span>已售：{item.product_sold_out}</span>
                                            <Icon type="delete" />
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }else{
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
                            <Icon type="delete" />
                        </div>
                    </div>
                </div>
            )
            
        }
        
    }
}
const MyState = function(state){
    return {
        show:state.login.data,
        goodsdata:state.myset.goodsId
    }
}
export default connect(MyState, collectAction)(MyCollectComponent)
