import React, {Component} from 'react';
import {Router, hashHistory, browserHistory} from 'react-router';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as BuycarActions from './PayActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button,Icon} from 'antd';

import HistorybackComponent from "../buycar/HistorybackComponent.js";
import MaskComponent from "./MaskComponent";
import LinksMask  from "../common/linksMask/linksMaskComponent";
import './Pay.scss';
import * as commonUrl from '../common/commonUrl.js';

class BuycarComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                        isShowLinks:'none'
                    }
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

    render(){
        return(
            <div id="account">
                <header id="acheader">
                    <HistorybackComponent />
                    <h2 onClick={this.topay}>在线支付</h2>
                    <Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
                </header>
                <main id="acmain">
                </main>
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