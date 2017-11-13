import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as UserActions from './UserAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";


var UserComponent =  React.createClass({
    render(){
        return(
           <div>
              <h2>user</h2>
           </div>
        )
    }
})

