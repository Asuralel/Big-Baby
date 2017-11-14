import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ProductAction from './ProductAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";
import DataGrid from "../datagrid/DataGrid";

class ProductComponent extends React.Component{
    componentDidMount(){
        this.props.ProductInit();
    }
		
    render(){console.log(this.props.dataset)
    	return (
	       <div>
	            <SpinnerComponent show={this.props.loading}/>
	            <h1>你好</h1>
	            <table>
	                <thead>
	                    <tr>
	                    {
	                        this.props.dataset ? Object.keys( this.props.dataset[0]).map(function(key, idx){
	                            return <th key={'th' + idx}>{key}</th>
	                        }):''
	                    }
	                    </tr>
	                </thead>
	                <tbody>
	                    {
	                        (this.props.dataset || []) .map(function(obj, idx){
	                            return (
	                                <tr key={'tr' + idx}>
	                                    {
	                                        Object.keys(obj).map(function(key, i){
	                                            return <td key={'td' + i}>{obj[key]}</td>
	                                        })
	                                    }
	                                </tr>
	                            )
	                        })
	                    }
	                    <tr>
	                        <td></td>
	                    </tr>
	                </tbody>
	            </table>
	        </div>
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

