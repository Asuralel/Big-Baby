import React from 'react'
import {Link} from 'react-router'


import FooterComponent from '../common/footer/footerComponent'


import './home.scss'
import {  Icon , Button , BackTop , Carousel} from 'antd';

class homeComponent extends React.Component {
    render(){
        return(
            <div className="home">
                <header>
                    <div className="header-top">
                            <Icon type="search" className="search"/>
                            <input type="text" value="吸顶" />
                    </div>
                        <Carousel autoplay className="slideshow">
                           <div><img src="./src/asset/l1.jpg"/></div>
                           <div><img src="./src/asset/l2.jpg"/></div>
                           <div><img src="./src/asset/l3.jpg"/></div>
                           <div><img src="./src/asset/l4.jpg"/></div>
                         </Carousel>
                    <div className="home-main">
                        <ul>
                            <li><Link to="/buycar"><Icon type="shopping-cart"  className="white" style={{background:'#FF6F00'}} /><span>购物车</span></Link></li>
                            <li><Link to="/my/myHome"><Icon type="home"  className="white"style={{background:'#F7B200' }} /><span>客户晒家</span></Link></li>
                            <li><Link to="/sort"><Icon type="heart"  className="white" style={{background:'#B589E0' }} /><span>图览家居</span></Link></li>
                            <li><Link to="/home"><Icon type="check"  className="white" style={{background:'#F53274' }} /><span>体验馆</span></Link></li>
                        </ul>
                    </div>
                </header>
                <nav>
                    <div>
                        <div className="remen">
                            <p className="f4f4f4">　</p>
                            <span className="title-remen"><i>　</i>热门活动</span>
                            <div className="remen-hot">
                                <div className="hot">
                                    <div className="h1">
                                        <p className="hei">团购大趴</p>
                                        <p className="hong">好货低至1折</p>
                                        <img src="./src/asset/h1.jpg"/>
                                    </div>
                                    <div className="h2">
                                        <p className="hei">中式雅居</p>
                                        <p className="hong">沉稳经典</p>
                                        <img src="./src/asset/h2.jpg"/>
                                    </div>
                                    <div className="h3">
                                        <p className="hei">简美汇</p>
                                        <p className="hong">70年厨柜</p>
                                        <img src="./src/asset/h3.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xinpin">
                            <span className="title-remen"><i>　</i>新品推荐</span>
                            <div className="recommend">
                                <div className="xinpin-recommend">
                                    <div className="h1">
                                        <p className="hei">简美风茶几</p>
                                        <p className="hui">双抽屉设计</p>
                                        <p className="red">￥<span className="price">1250</span></p>
                                        <img src="./src/asset/h01.jpg"/>
                                    </div>
                                    <div className="h2">
                                        <p className="hei">田园饰花公主床</p>
                                        <p className="hui">小资情调 人气爆款</p>
                                        <p className="red">促销价￥<span>2350</span></p>
                                        <img src="./src/asset/h1.png"/>
                                    </div>
                                    <div className="h3">
                                        <p className="hei">时尚餐边柜</p>
                                        <p className="hui">尊贵大气</p>
                                        <p className="red">￥<span className="price">1550</span></p>
                                        <img src="./src/asset/h3.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <p className="f4f4f4"> 　</p>
                <main>
                    <div className="like">
                        <span>猜你喜欢</span>
                        <div>
                            <ul>
                               <li className="h1">
                                   <span className="hei">团购大趴</span><span className="hong">好货低至1折</span><img src="./src/asset/h1.jpg" width='187' height='192'/>
                               </li>
                               <li className="h2">
                                   <span className="hei">中式雅居</span><span className="hong">沉稳经典</span><img src="./src/asset/h2.jpg" width='187' height='86'/>
                               </li>
                               <li className="h3">
                                   <span className="hei">简美汇</span><span className="hong">70年蓝骑</span><img src="./src/asset/h3.jpg" width='187' height='86'/>
                               </li>
                            </ul>
                        </div>
                    </div>
                </main>
                <footer>
                    <div>
                        <BackTop>
                          <div className="ant-back-top-inner">GO</div>
                        </BackTop>
                        Scroll down to see the bottom-right
                        <strong style={{ color: '#1088e9' }}> blue </strong>
                        button.
                    </div>
                </footer>
                {/*注释：公共底部*/}
                <FooterComponent />
            </div>
        )
    }
}

export default homeComponent