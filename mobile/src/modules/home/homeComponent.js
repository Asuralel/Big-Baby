import React from 'react'
import {Link,hashHistory} from 'react-router'

import FooterComponent from '../common/footer/footerComponent'
import ComSearch from '../common/comSearch/comSearchComponent.js'

import './home.scss'
import {  Icon , Button , BackTop , Carousel,Input} from 'antd';
const Search = Input.Search 
class homeComponent extends React.Component {
    render(){
        return(
            <div className="home">
                <header>
                    <div className="header-top">
						<ComSearch />
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
                            <span className="title-hong"><i>　</i>热门活动</span>
                            <div className="remen-hot">
                                <div className="hot">
                                    <div className="h1">
                                        <p className="hei">团购大趴</p>
                                        <p className="red">好货低至1折</p>
                                        <img src="./src/asset/h1.jpg"/>
                                    </div>
                                    <div className="h2">
                                        <p className="hei">中式雅居</p>
                                        <p className="red">沉稳经典</p>
                                        <img src="./src/asset/h2.jpg"/>
                                    </div>
                                    <div className="h3">
                                        <p className="hei">简美汇</p>
                                        <p className="red">70年厨柜</p>
                                        <img src="./src/asset/h3.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="jiaju">
                            <span className="title-hong"><i>　</i>家具城</span>
                                <div className="jiaju-furniture">
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
                                        <p className="hei">时尚枕边柜</p>
                                        <p className="hui">大宝专用</p>
                                        <p className="red">￥<span className="price">1550</span></p>
                                        <img src="./src/asset/h5.jpg"/>
                                    </div>
                                </div>
                        </div>
                         <p className="f4f4f4"> 　</p>
                        <div className="xinpin">
                            <span className="title-hong"><i>　</i>新品推荐</span>
                            <div className="jiaju-recommend">
                                <ul className="h1">
                                    <li><p className="hei">简美风茶几</p></li>
                                    <li><p className="hui">双抽屉设计</p></li>
                                    <li><p className="red">￥<span className="price">1250</span></p></li>
                                    <li><img src="./src/asset/h05.jpg"/></li>
                                </ul>
                                <ul className="h1">
                                    <li><p className="hei">简美风茶几</p></li>
                                    <li><p className="hui">双抽屉设计</p></li>
                                    <li><p className="red">￥<span className="price">1250</span></p></li>
                                    <li><img src="./src/asset/h05.jpg"/></li>
                                </ul>
                                <ul className="h1">
                                    <li><p className="hei">简美风茶几</p></li>
                                    <li><p className="hui">双抽屉设计</p></li>
                                    <li><p className="red">￥<span className="price">1250</span></p></li>
                                    <li><img src="./src/asset/h05.jpg"/></li>
                                </ul>
                                <ul className="h1">
                                    <li><p className="hei">简美风茶几</p></li>
                                    <li><p className="hui">双抽屉设计</p></li>
                                    <li><p className="red">￥<span className="price">1250</span></p></li>
                                    <li><img src="./src/asset/h05.jpg"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <p className="f4f4f4"> 　</p>
                <main>
                    <div className="like">
                        <span>猜你喜欢</span>
                        <ul>
                            <li><img src="./src/asset/like5.jpg"/></li>
                            <li><p>[凯撒豪庭]美式田园 名师力荐 优质实木内架 内置高密度海绵 全真皮沙发套装(1+2+3)</p></li>
                            <li>
                                <span className="red">￥<span>14200</span></span>
                                <span className="hui">已售<span>5254</span></span>
                            </li>
                        </ul>
                        <ul>
                            <li><img src="./src/asset/like6.jpg"/></li>
                            <li><p>[大宝萌屋]青少年 儿童 卧房 粉色公主 女孩床 6702A 1.2*2米床</p></li>
                            <li>
                                <span className="red">￥<span>12555</span></span>
                                <span className="hui">已售<span>6666</span></span>
                            </li>
                        </ul>
                        <ul>
                            <li><img src="./src/asset/like7.jpg"/></li>
                            <li><p>这里超过24个字后面的都会变成省略号,不信的话你就试试咯</p></li>
                            <li>
                                <span className="red">￥<span>16888</span></span>
                                <span className="hui">已售<span>8888</span></span>
                            </li>
                        </ul>
                    </div>
                </main>
                <footer>
                    <div>
                        <BackTop>
                          <div className="ant-back-top-inner">GO</div>
                        </BackTop>
                    </div>
                </footer>
                <div className="h50"></div>
                {/*注释：公共底部*/}
                <FooterComponent />
            </div>
        )
    }
}

export default homeComponent