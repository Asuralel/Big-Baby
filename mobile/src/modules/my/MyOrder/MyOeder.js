import React from 'react'
import {connect} from "react-redux"
import { Tabs ,Button} from 'antd';
const TabPane = Tabs.TabPane;
import {Link} from 'react-router'
import * as commonUrl from '../../common/commonUrl.js';
import Historyback from "../../buycar/HistorybackComponent" 
import orderscss from "./myOrder.scss"
import http from "../../../utils/HttpClient.js"
var totalprice=0;
class MyOrderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            user_order:[],
            order_product:[],
            totalprice:[]
        }
    }
    onChange(key){
        console.log(key)

    }
    componentDidMount(){
        var user = JSON.parse(sessionStorage.getItem('user'));
        if(user){
            var username = user.username;
            http.get('my/myorder.php',`username=${username}`).then((res)=>{
                var res = JSON.parse(res);
                var order_product = [];
                res.forEach(function(item){
                    order_product.push(JSON.parse(item.order_product));
                })

                
                var totalpriceAry = [];
                order_product.map(function(item){
                    var totalprice = 0;
                    item.forEach(function(item){
                        totalprice+=item.product_origin_price*item.amount;
                    })
                    totalpriceAry.push(totalprice);
                })
                console.log(totalpriceAry)
                this.setState({ user_order: res,order_product:order_product, totalprice:totalpriceAry});

            })
            this.refs.noGoods1.style.display = 'none';
        }else{
            this.refs.noGoods1.style.display = '';
        }
        
    }
    render(){
        return (
            <div className="MyOrder">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>我的订单</h3>
                </div>
                <Tabs defaultActiveKey={this.props.params.key} onChange={this.onChange}>
                    <TabPane tab="待付款" key="1">
                        <div className="goShop">
                            <div className="noGoods" ref="noGoods1">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                            {
                                this.state.user_order.map((item,idx)=>{
                                    return (
                                        <div className="waitpay">
                                            <div className="waitpay_h">
                                            <div>订单状态： <span> {item.order_status}</span></div>
                                                <p>{item.order_date}</p>
                                            </div>
                                            <ul>
                                                {   
                                                    this.state.order_product[idx].map(function(item){
                                                        return (
                                                            <li><img src={commonUrl.IMGURL+item.product_image} /></li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                            <div className="waitpay_b">共{this.state.order_product[idx].length}件商品 合计<span>￥{this.state.totalprice[idx]}</span></div>
                                            <div className="waitpay_handle"><Button type="danger" ghost>付款</Button><span></span><Button type="primary" ghost>取消订单</Button></div>
                                        </div>
                                    )
                                })
                            }
                            

                        </div>
                    </TabPane>
                    <TabPane tab="待发货" key="2">
                        <div className="goShop">
                            <div className="noGoods">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="待收货" key="3">
                        <div className="goShop">
                            <div className="noGoods">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="待评价" key="4">
                        <div className="goShop">
                            <div className="noGoods">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default MyOrderComponent

