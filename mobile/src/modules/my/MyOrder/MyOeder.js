import React from 'react'
import {connect} from "react-redux"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import {Link} from 'react-router'


import Historyback from "../../buycar/HistorybackComponent" 
import orderscss from "./myOrder.scss"
class MyOrderComponent extends React.Component{
    render(){
        return (
            <div className="MyOrder">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>我的订单</h3>
                </div>
                <Tabs defaultActiveKey={this.props.params.key}>
                    <TabPane tab="待付款" key="1">
                        <div className="goShop">
                            <div className="noGoods">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
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

