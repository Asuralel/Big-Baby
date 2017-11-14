import React, {Component} from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as BuycarActions from './BuycarActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button,Icon} from 'antd';

import HistorybackComponent from "./HistorybackComponent";
import './Buycar.scss';
import * as commonUrl from '../common/commonUrl.js';


class BuycarComponent extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            buycarHas: false,
            bcListInit: [
                        {
                          product_name: '皇家尊享 一级K9水晶拉扣 1.8米玫瑰雕花描金真皮床 725系列' ,
                          product_origin_price: '10900',
                          amount: 1,
                          product_image:'LAROSE-CO-A728-18C.jpg'
                        },
                        {
                          product_name: '白橡木纹 质感明显 健康风尚时尚双拼色 1.5米双床' ,
                          product_origin_price: '12900',
                          amount: 2,
                          product_image:'DMY-XL-A934-15C.jpg'
                        }
                        ],
            accountList:[],
            totalPri:0,
            amountAll:0,
            selAll:false
        }
        this.addAmount = this.addAmount.bind(this);
        this.subAmount = this.subAmount.bind(this);
        this.removeLi = this.removeLi.bind(this);
        this.selLi = this.selLi.bind(this);
        this.selAll = this.selAll.bind(this);
        this.accountOK = this.accountOK.bind(this);
    }

    componentWillMount(){
        if(this.state.bcListInit.length > 0){
            this.setState({buycarHas:true})
        }
    }

    addAmount(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.state.bcListInit;
        list[idx].amount++;
        this.setState({bcListInit:list});
    }
    subAmount(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.state.bcListInit;
        if(list[idx].amount > 1){
            list[idx].amount--;
        };
        this.setState({bcListInit:list});
    }
    removeLi(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.state.bcListInit;
        list.splice(idx,1);
        this.setState({bcListInit:list}); 
        if(this.state.bcListInit.length <= 0){
            this.setState({buycarHas:false})
        }      
    }

    selLi(e){
        const idx = e.target.getAttribute('data-index');
        const list = this.state.bcListInit;
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
        const selAll = !this.state.selAll;
        var totalPri = 0;
        var amountAll = 0;

        this.setState({selAll:selAll})

        if(selAll){
            const accountList = JSON.parse(JSON.stringify(this.state.bcListInit));
           
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

        }
    }

    render(){
        return(
            <div id="buycar">
                <header id="bcheader">
                    <HistorybackComponent />
                    <h2>购物车</h2>
                </header>
                <main id="bcmain">
                    <div className="nothing" style={{display:this.state.buycarHas ? 'none' : 'block'}}>
                        <img src={commonUrl.IMGURL + 'buycar.png'} />
                        <p>您还没有加入任何商品</p>
                        <Link to='home'>随便逛逛</Link>
                    </div>
                    <ul className="buycarList" style={{display:this.state.buycarHas ? 'block' : 'none'}}>
                            {
                                this.state.bcListInit.map(function(item,index){
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
                                }.bind(this))
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
                    <Link to='account' className="account">结算(<span>{this.state.amountAll}</span>)</Link>
                </footer>
                <SpinnerComponent show = {this.props.loading} />
                <div className='mask'></div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, BuycarActions)(BuycarComponent)