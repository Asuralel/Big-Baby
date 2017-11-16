import React from 'react';
import {connect} from "react-redux";
import {Icon } from 'antd';
import {Link ,hashHistory} from 'react-router';

import common from "../../static/styles/common.scss";
import Mycss from "./my.scss";
import OnLineState from './loggingStatus';
import * as MyActions from "./MyActions";
import FooterComponent from "../common/footer/footerComponent.js";
import fcss from "../common/footer/footer.scss";
import QuitLogin from "./quitLogin";
import loginToken from "../login/logintoken";


class MyComponent extends React.Component {
    componentDidMount(){
        
    }
    constructor(props){
        super(props);
        this.state= {
            show:false
        }
        // this.masknoshow = this.masknoshow.bind(this);
    }
    componentWillMount(){
        this.props.MyActions().then(response=>{
            const res =JSON.parse(response)

            if(res.start==true){
                var token = '';
                var date = new Date();  
                date.setDate(date.getDate() +7);
                document.cookie = "token=" + JSON.stringify(res) + ";expires=" + date.toUTCString();
                this.setState({show:response});
            }

        })
    }
    quitLogin(e){
        if(e.target.className == 'QuitLogin'){
            var date = new Date();
            date.setDate(date.getDate() -100);
            document.cookie = "token=" + "" + ";expires=" + date.toUTCString();
            hashHistory.push('/home')
        }
    }
    render(){
        return(
            <div className="personalBox">
                <div className="personalHead">
                    <h3>我</h3>
                </div>
                <div className="personalMain" onClick={this.quitLogin.bind(this)}>
                    <div className="pMainHead">
                        <div><img src="./src/asset/login.jpg"/></div>
                        <div className="loginBox">
                            <OnLineState loginShow={this.state.show}/>    
                        </div>
                    </div>     
                       
                    <div className="pOrder">
                    <Link to="/my/myOrder"><div className="rightIcon"><Icon type="file-text" style={{ fontSize: 20, color: '#FF9C00'}}/>&nbsp;&nbsp;我的订单<span><Icon type="right" /></span>
                        </div></Link>
                        <div>
                        <div><Icon type="credit-card" /><p>待付款</p></div>
                        <div><Icon type="inbox" /><p>待发货</p></div>
                        <div><Icon type="car" /><p>待收货</p></div>
                        <div><Icon type="message" /><p>待评价</p></div>
                        </div>
                        
                    </div>
                    <div className="pMyPay">
                        <div className="rightIcon"><Icon type="pay-circle-o"style={{ fontSize: 20, color: '#B479E6'}} />&nbsp;&nbsp;我的钱包<span><Icon type="right" /></span></div>
                        <div>
                            <div><Icon type="red-envelope" /><p>我的优惠卷</p></div>
                            <div> <Icon type="star-o" /><p>我的乐币</p></div>
                            <div><Icon type="api" /><p>我的金币</p></div>
                        </div>
                    </div>
                    <div className="pShopMsg">
                        <Link to="/buycar"><div className="rightIcon">
                            <Icon type="shopping-cart" style={{ fontSize: 20, color: '#F55959'}}/>&nbsp;&nbsp;我的购物车<span><Icon type="right" /></span>
                        </div></Link>
                        <Link to="/my/myCollect"><div className="rightIcon">
                           <Icon type="heart" style={{ fontSize: 20, color: '#FA578E'}}/> &nbsp;&nbsp;我的收藏<span><Icon type="right" /></span>
                           </div></Link>
                        <div className="rightIcon">
                            <Icon type="phone" style={{ fontSize: 20, color: '#1FAFF8'}}/>&nbsp;&nbsp;我的通话<span><Icon type="right" /></span>
                        </div>

                    </div>
                    <div className="pAbout">
                        <Link to="/my/mySet"><div className="rightIcon">
                            <Icon type="setting" style={{ fontSize: 20, color: '#FA624E'}}/>&nbsp;&nbsp;个人设置<span><Icon type="right" /></span>
                        </div></Link>
                        <Link to="/my/mySecurity"><div className="rightIcon">
                           <Icon type="safety" style={{ fontSize: 20, color: '#58bc58'}}/> &nbsp;&nbsp;账户安全<span><Icon type="right" /></span>
                        </div></Link>
                        <div className="rightIcon">
                            <Icon type="menu-unfold" style={{ fontSize: 20, color: '#58bc58'}}/>&nbsp;&nbsp;关于大宝家具<span><Icon type="right" /></span>
                        </div >


                    </div>

                    <QuitLogin loginShow={this.state.show}/> 
                </div>
                <FooterComponent />
            </div>
        )
    }
}
const MyState = function(state){
    return {
      show:state.login.data
    }
}
export default connect(MyState, MyActions)(MyComponent)