import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ProductAction from './ProductAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import DatagridComponent from '../datagrid/DatagridComponent';
import {Router,Route,Link} from "react-router";



class ProductComponent extends React.Component{
    componentDidMount(){
        
        this.props.ProductInit();
    }

    render(){
        return (
            
                <DatagridComponent url="http://localhost/laoxie/api/goodslist.php"/> 
            )
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.product.loading,
        dataset: state.product.dataset || {}
    }
}

export default connect(mapStateToProps, ProductAction)(ProductComponent)

