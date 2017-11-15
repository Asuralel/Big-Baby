import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as HomeAction from './HomeAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";

import { Layout, Menu, Icon } from 'antd';
import homescss from "./home.scss";
const { Header, Sider, Content,Footer} = Layout;

var HomeComponent =  React.createClass({
    getInitialState:function(){
        return{
            collapsed:false
        }
    },
    toggle(){
        this.setState({
            collapsed:!this.state.collapsed,
        })
    },

    render(){
        return(
            <Layout>
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                  <div className="logo">
                    <h1>BIGBABY</h1>
                  </div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                      <Icon type="video-camera" />
                      <span className="nav-text"><Link to="product">product</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="upload" />
                      <span className="nav-text"><Link to="order">order</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="user">user</Link></span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Header style={{ background: '#fff', padding: 0 }}>
                      <ul>
                          <li>Welcome！<span className="account"></span></li>
                          <li><Link to="register">Exit</Link></li>
                      </ul>
                  </Header>
                  <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.props.children}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                    BigBaby ©2017 Created by bigbaby
                  </Footer>
                </Layout>
            </Layout>
        )
    }
})

const mapStateToProps = state => ({
    loading: state.home.loading,
})
export default connect(mapStateToProps, HomeAction)(HomeComponent)
 