import React, {Component} from 'react';
import {Router, hashHistory, browserHistory} from 'react-router';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as BuycarActions from './BuycarActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button,Icon} from 'antd';

import HistorybackComponent from "./HistorybackComponent";
import MaskComponent from "./MaskComponent";
import LinksMask  from "../common/linksMask/linksMaskComponent";
import './Buycar.scss';
import * as commonUrl from '../common/commonUrl.js';


class BuycarComponent extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            buycarHas: false,
            isShowLinks:'none',
            accountList:[],
            totalPri:0,
            amountAll:0,
            selAll:false,
            maskshow:false,
            username:'liu',
            buycarLi: this.props.buycarLi.length > 0 ? JSON.parse(JSON.stringify(this.props.buycarLi)) : []
        }
        this.addAmount = this.addAmount.bind(this);
        this.subAmount = this.subAmount.bind(this);
        this.removeLi = this.removeLi.bind(this);
        this.selLi = this.selLi.bind(this);
        this.selAll = this.selAll.bind(this);
        this.accountOK = this.accountOK.bind(this);
        this.masknoshow = this.masknoshow.bind(this);
        // this.buycarGrid= this.buycarGrid.bind(this);
        this.test1 = this.test1.bind(this);
    }

    test1(){
        // this.props.history.goBack(-1)
    }

    componentWillMount(){

        const obj = {username:this.state.username}
        this.props.buycarInit(obj);
        if(this.props.buycarLi.length <= 0){
            this.setState({buycarHas:true})
        }
    }
    componentDidMount(){
        // console.log(666)

    }


    componentWillUnmount(){
        // console.log(4)
        const obj = {
                        username:this.state.username,
                        list:JSON.stringify(this.props.buycarLi)
                    }
        console.log(obj)
        this.props.buycarInit(obj);
    }
    addAmount(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.props.buycarLi;
        const accountList = this.state.accountList;
        var totalPri = this.state.totalPri;
        var amountAll = this.state.amountAll;
        for(var i=0;i<accountList.length;i++){
            if(list[idx].product_name == accountList[i].product_name){
                accountList[i].amount++;
                amountAll++;
                totalPri += accountList[i].product_origin_price * 1;
            }
        }
        list[idx].amount++;
        // console.log(accountList)
        this.setState({buycarLi:list,accountList:accountList,totalPri:totalPri,amountAll:amountAll});
    }
    subAmount(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.props.buycarLi;
        const accountList = this.state.accountList;
        var totalPri = this.state.totalPri;
        var amountAll = this.state.amountAll;
        // console.log(accountList)
        for(var i=0;i<accountList.length;i++){
            if(list[idx].product_name == accountList[i].product_name){
                if(accountList[i].amount > 1){
                    accountList[i].amount--;
                    amountAll--;
                    totalPri -= accountList[i].product_origin_price * 1;
                }
            }
        }       
        if(list[idx].amount > 1){
            list[idx].amount--;
        };
        this.setState({buycarLi:list,accountList:accountList,totalPri:totalPri,amountAll:amountAll});
    }
    removeLi(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.props.buycarLi;
        list.splice(idx,1);
        this.setState({buycarLi:list}); 
        if(this.props.buycarLi.length <= 0){
            this.setState({buycarHas:false})
        }      
    }

    selLi(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.props.buycarLi;
        const accountList = this.state.accountList;

        var accountLihas = false;
        var accountLiIdx;

        var totalPri = 0;
        var amountAll = 0;
        for(var i=0;i<accountList.length;i++){
            if(list[idx].product_name == accountList[i].product_name){
                accountLihas = true;
                accountLiIdx = i;
            }
        }

        if(!accountLihas){ 
            e.target.style.color = '#f46e65';
            accountList.push(list[idx]);
        }else{
            e.target.style.color = 'rgba(0, 0, 0, 0.65)'; 
            accountList.splice(accountLiIdx,1);
        }

        this.setState({accountList:accountList});
        this.state.accountList.forEach(function(item){
            amountAll += item.amount;
            totalPri += item.amount * item.product_origin_price;
        }.bind(this));
        this.setState({totalPri:totalPri,amountAll:amountAll});
    }

    selAll(){
        // this.masknoshow = this.masknoshow.bind(this);
        const selAll = !this.state.selAll;
        var totalPri = 0;
        var amountAll = 0;

        this.setState({selAll:selAll})

        if(selAll){
            const accountList = JSON.parse(JSON.stringify(this.props.buycarLi));
            this.setState({accountList:accountList});
            accountList.forEach(function(item){
                amountAll += item.amount;
                totalPri += item.amount * item.product_origin_price;
            }.bind(this));
        }else{
            this.setState({accountList:[]});
            totalPri = 0;
            amountAll = 0;
        }
        this.setState({totalPri:totalPri,amountAll:amountAll});

    }

    accountOK(){
        if(this.state.accountList.length <= 0){
            this.setState({maskshow:true});
        }else{
            const obj = {
                            username:this.state.username,
                            list:JSON.stringify(this.props.buycarLi),
                            account:JSON.stringify(this.state.accountList)
                        }
            this.props.buycarInit(obj);
            hashHistory.push('account');
        }
    }
    masknoshow(){
        this.setState({maskshow:false})
    }
    //linksMaskComponent.js：公共模块导航相关方法
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
    render(){
        return(
            <div id="buycar">
                <header id="bcheader">
                    <HistorybackComponent />
                    <h2 onClick= {this.test1}>购物车</h2>
                    <Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
                 
                </header>
                <main id="bcmain">
                    <div className="nothing" style={{display:this.state.buycarHas ? 'none' : 'block'}}>
                        <img src={commonUrl.IMGURL + 'buycar.png'} />
                        <p>您还没有加入任何商品</p>
                        <Link to='home'>随便逛逛</Link>
                    </div>
                    <ul className="buycarList" style={{display:this.state.buycarHas ? 'block' : 'none'}}>
                            {
                                this.props.buycarLi.length > 0 ?
                                this.props.buycarLi.map((item,index) => {
                                    return(
                                            <li key={item.product_image} >
                                                <div className='checkBox'>
                                                    <Icon type='check-square' data-index={index} onClick={this.selLi} style={{color:this.state.selAll ? '#f46e65' : 'rgba(0, 0, 0, 0.65)'}} />
                                                </div>
                                               <div className='imgbox'>
                                                    <img src={commonUrl.IMGURL + item.product_image} /> 
                                               </div>
                                               <div className="info">
                                                    <p>{item.product_name}</p>
                                                    <p>￥{item.product_origin_price}</p>
                                                    <div>
                                                        <span data-index={index} onClick={this.subAmount}>-</span>
                                                        <span>{item.amount}</span>
                                                        <span data-index={index} onClick={this.addAmount}>+</span>
                                                        <Icon type='delete' data-index={index} onClick={this.removeLi} />
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                }) : ''
                            }
                    </ul>
                </main>
                <footer id="bcfooter" style={{display:this.state.buycarHas ? 'flex' : 'none'}}>
                    <div className="selAll">
                        <Icon type='check-square' onClick={this.selAll} style={{color:this.state.selAll ? '#f46e65' : 'rgba(0, 0, 0, 0.65)'}} />全选
                    </div>
                    <div className="totalPri">
                        合计:<span className="price">￥{this.state.totalPri}</span><br />
                       <span>不含运费</span>
                    </div>
                    <a onClick={this.accountOK} className="account">结算(<span>{this.state.amountAll}</span>)</a>
                </footer>
                <SpinnerComponent show = {this.props.loading} />
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
                <LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={2} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.login.loading,
    buycarLi:state.buycar.data ? JSON.parse(state.buycar.data[0].list) : []
})
export default connect(mapStateToProps, BuycarActions)(BuycarComponent)