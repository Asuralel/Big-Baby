import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import login from "./login.scss";
import Goback from "../buycar/HistorybackComponent";
import {Icon} from 'antd';
import SpinnerComponent from "../spinner/SpinnerComponent";
import * as loginActions from "./LoginAction";

class loginComponent extends React.Component{
    loginMsg(){

        const username = this.refs.username.value;
        const password = this.refs.password.value;
        this.props.login(username, password);
    }
    componentDidUpdate(){
        console.log(this.props.token);
        if(this.props.token){
            if(this.props.token.start){
                var token = '';
                var date = new Date();  
                date.setDate(date.getDate() +7);
                document.cookie = "token=" + JSON.stringify(this.props.token) + ";expires=" + date.toUTCString();
                hashHistory.push('/home')
            }else{

            }
        }
    }
    render(){

        return (
            <div>
                <div className="loginHead">
                    <img src="./src/asset/login.jpg"/>
                    <div className="headtool">
                        <span><Goback/></span><Link to="/register"><span>注册</span></Link>
                        <h4><i>大宝家具</i></h4>
                    </div>
                </div>
                <h2 className="chooseMode">
                    欢迎登录
                </h2>
                <div className="loginCase">
                    <div><Icon type="user" /><input type="text" placeholder="请输入用户名\手机号码\邮箱" ref="username"/></div>
                    <div className="password"><Icon type="lock" /><input type="password" placeholder="请输入密码" ref="password"/></div>
                    <div className="loginButton" onClick={this.loginMsg.bind(this)}>登录</div>
                    <div ><span><Link to="/ ">忘记密码?</Link></span></div>
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>

        )
    }
    
}

const mapStateToProps = state => ({
    loading : state.login.loading,
    token : state.login.data
})
export default connect(mapStateToProps, loginActions)(loginComponent);