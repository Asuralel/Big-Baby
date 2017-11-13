import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as OrderAction from './OrderAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";




class OrderComponent extends React.Component{

   
}



const mapStateToProps = function(state){
    return {
        loading: state.order.loading,
        dataset: state.order.dataset
    }
}

export default connect(mapStateToProps, OrderAction)(OrderComponent)

