import React, {Component} from 'react';
import {Router, hashHistory, browserHistory} from 'react-router';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as BuycarActions from './AccountActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button,Icon} from 'antd';

import HistorybackComponent from "../buycar/HistorybackComponent.js";
import MaskComponent from "./MaskComponent";
import LinksMask  from "../common/linksMask/linksMaskComponent";
import './Account.scss';
import * as commonUrl from '../common/commonUrl.js';

class BuycarComponent extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            isShowLinks:'none',
            username: 'liu',
            totalPrice:0
        }
        this.topay = this.topay.bind(this);
    }

    componentWillMount(){
        const obj = {username:this.state.username};
        this.props.accountInit(obj).then(()=>{

            var totalPrice = 0;
            if(this.props.accountList.length > 0){
                this.props.accountList.forEach(function(item){
                    totalPrice += item.product_origin_price * item.amount
                })
                this.setState({totalPrice:totalPrice})
            }
        });
    }

    componentUpdate(){
    }

    showLinks(){
        this.setState({
            isShowLinks:'block'
        });
    }
    hideLinks(){
        this.setState({
            isShowLinks:'none'
        });
    }

    topay(){
        console.log(this.props)
        // hashHistory.push('pay');
    }

    render(){
        return(
            <div id="account">
                <header id="acheader">
                    <HistorybackComponent />
                    <h2 onClick={this.topay}>确认订单</h2>
                    <Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
                </header>
                <main id="acmain">
                    <div className='address'>
                        <p><span>+</span>请添加收货地址</p>
                    </div>
                    <div className='blank'></div>
                    <ul className="accountList">
                            {
                                this.props.accountList.length > 0 ?
                                this.props.accountList.map((item,index) => {
                                    return(
                                            <li key={item.product_image} >
                                               <div className='imgbox'>
                                                    <img src={commonUrl.IMGURL + item.product_image} /> 
                                               </div>
                                               <div className="info">
                                                    <p>{item.product_name}</p>
                                                    <p>￥{item.product_origin_price}</p>
                                                    <div>
                                                        <span>×{item.amount}</span>
                                                    </div>
                                                    <p>配送方式：物流</p>
                                                </div>
                                            </li>
                                        )
                                }) : ''
                            }                       
                    </ul>
                    <ul className='info'>
                        <li>商品小计：￥{this.state.totalPrice}</li>
                        <li>配送服务：<input type="checkbox" />物流点自提</li>
                        <li>运费/服务费小计：￥{parseInt(this.state.totalPrice * 0.012)}</li>
                    </ul>
                </main>
                <footer id="acfooter">
                    <p className='price'>应付总额：<span>￥{this.state.totalPrice + parseInt(this.state.totalPrice * 0.012)}</span></p>
                    <a onClick={this.topay} className="account">提交订单</a>
                </footer>
                <SpinnerComponent show = {this.props.loading} />
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
                <LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={5} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.login.loading,
    accountList:state.account.data ? JSON.parse(state.account.data[0].account) : []
})
export default connect(mapStateToProps, BuycarActions)(BuycarComponent)