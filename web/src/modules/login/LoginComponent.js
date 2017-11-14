import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import loginScss from "./Login.scss";
import { Input } from 'antd';
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
        
        this.props.login(this.refs.username.value, this.refs.password.value)
        console.log(this.props)
    }

    render(){
        return(<div className="login">
                <ul>
                    <li>
                        <label></lable>
                    <Input placeholder="请输入您的帐号" ref="username"/></li>
                    <li><input type="text" ref="password"/></li>
                    <li><input type="button" value="登录" onClick={this.loginHandler.bind(this)}/></li>
                </ul>
                <SpinnerComponent show={this.props.loading}/>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent