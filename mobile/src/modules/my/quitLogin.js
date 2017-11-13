import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import loginstatus from "./my.scss"

class SpinnerComponent extends React.Component{
    componentDidMount(){
    }
    render(){
        if(this.props.loginShow){
            return (
                <div className="quitLogin">
                       <span>退出登录</span>
                </div>
            )
        }else{
            return null            
        }

    }
}
export default SpinnerComponent