import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ProductAction from './ProductAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";



class ProductComponent extends React.Component{
    componentDidMount(){
        this.props.ProductInit();
        console.log(this)
    }

    render(){
        return (
            <div>
                <SpinnerComponent show={this.props.loading}/>
                <table>
                    <thead>
                        <tr>
                        {
                            Object.keys(this.props.dataset.data ? this.props.dataset.data[0] : {}).map(function(key, idx){
                                return <th key={'th' + idx}>{key}</th>
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.dataset.data || []) .map(function(obj, idx){
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
        dataset: state.product.dataset || {}
    }
}

export default connect(mapStateToProps, ProductAction)(ProductComponent)

