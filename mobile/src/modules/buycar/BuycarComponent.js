import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as BuycarActions from './BuycarActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button } from 'antd';

import './Buycar.scss';

class BuycarComponent extends React.Component {
    
    render(){
        return(
            <div id="buycar">
                <header id="bcheader">
                    <h2>购物车</h2>
                </header>
                <main id="bcmain"></main>
                <footer id="bcfooter"></footer>
                <SpinnerComponent show = {this.props.loading} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, BuycarActions)(BuycarComponent)