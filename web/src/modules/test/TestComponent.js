import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as TestActions from './TestAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link} from "react-router";

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content,Footer} = Layout;

var TestComponent =  React.createClass({
    componentDidMount:function(){
      this.props.Init();
    },
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
              <SpinnerComponent show={this.props.loading}/>
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="test">test</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="video-camera" />
                      <span className="nav-text"><Link to="login">login</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="upload" />
                      <span className="nav-text">order</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Icon type="user" />
                      <span className="nav-text">nav 4</span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Header style={{ background: '#fff', padding: 0 }} />
                  <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.props.children}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                  </Footer>
                </Layout>
            </Layout>
        )
    }
})

const mapStateToProps = state => ({
    loading: state.test.loading,
    dataset:state.test.dataset
})
export default connect(mapStateToProps, TestActions)(TestComponent)
