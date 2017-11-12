import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as ProductAction from './ProductAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";


var ProductComponent =  React.createClass({
    render(){
        return(
           <div>
              <h2>product</h2>
           </div>
        )
    }
})

