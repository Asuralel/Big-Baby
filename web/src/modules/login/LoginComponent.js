import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link,hashHistory} from "react-router";
import loginScss from "./Login.scss";
import { Input,Button} from 'antd';
// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // console.log(this.refs.username.value)
    }
    loginHandler(){
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }

        this.props.login(this.refs.username.refs.input.value,this.refs.password.refs.input.value)
    }
    render(){
        if(this.props.data=="ok"){
            hashHistory.push('/product');
        }else if(this.props.data=="fail"){
            alert("登录失败");
        }
        return(
            <div className="login">
                <h1>用户登录</h1>
                <ul>
                    <li>
                        <label for="username">用户名：</label>
                        <Input placeholder="请输入您的帐号" ref="username" id="username"/>
                    </li>
                     <li>
                        <label for="password">密码：</label>
                        <Input type="password" placeholder="请输入您的密码" ref="password" id="password"/>
                    </li>
                    <SpinnerComponent show={this.props.loading}/>
                    <li>
                        <Button type="primary" onClick={this.loginHandler.bind(this)}>登录</Button>
                        <Link to="register">  还未注册？</Link>
                    </li>
                </ul>
            </div>
            
        )
    }
}



const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.login.data
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent