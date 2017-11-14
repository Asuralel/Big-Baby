import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import loginstatus from "./my.scss"
var baseURI = "/src/asset/"
class SpinnerComponent extends React.Component{
    componentDidMount(){
    }
    render(){
        if(this.props.loginShow){
            return (
                <div className="loginStatus">
                    <div className="loginHead">
                        <img src={baseURI+"setheader.jpg"}/>
                    </div>
                    <h4>laughing</h4>
                    <h4>18888888888</h4>
                </div>
            )
        }else{
            return(

                <div className="loginStatus">
                    <p>您还没登录哦！</p>
                    <span><Link to="/login">马上登录</Link></span>
                </div>
            )
        }

    }
}
export default SpinnerComponent 