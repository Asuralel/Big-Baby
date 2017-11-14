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
            

                <DatagridComponent url="http://10.3.137.248/big_baby/api//web/product/product.php" 
                title1='product_name,product_type,product_color,product_price'/>
            )
    }
}





const mapStateToProps = function(state){
    return {
        loading: state.product.loading,
        dataset: state.product.dataset
    }
}

export default connect(mapStateToProps, ProductAction)(ProductComponent)

