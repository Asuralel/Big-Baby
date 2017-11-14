import React from 'react'
import {Link} from 'react-router'


import FooterComponent from '../common/footer/footerComponent'


import './home.scss'
import {Icon } from 'antd';


class homeComponent extends React.Component {
    render(){
        return(
            <div className="home">
                <header>
                    <div className="header-top">
                        <Icon type="search" className="search"/>
                        <input type="text" value="吸顶" />
                    </div>
                    <div className="slideshow">
                        <img src="./src/asset/login.jpg"/>
                    </div>
                    <div className="home-main">
                        <ul>
                            <li><Link to="/buycar"><Icon type="shopping-cart"  className="white" style={{background:'#FF6F00'}} /><span>购物车</span></Link></li>
                            <li><Link to="/buycar"><Icon type="home"  className="white"style={{background:'#F7B200' }} /><span>客户晒家</span></Link></li>
                            <li><Link to="/buycar"><Icon type="heart"  className="white" style={{background:'#B589E0' }} /><span>图览家居</span></Link></li>
                            <li><Link to="/buycar"><Icon type="check"  className="white" style={{background:'#F53274' }} /><span>体验馆</span></Link></li>
                        </ul>
                    </div>
                </header>
                <nav>
                    <div>
                        <div className="remen">
                            <p>　</p>
                            <span className="remenn"><i>　</i>热门活动</span>
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
                        <div className="xinpin">
                            <span>新品推荐</span>
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
                        <div className="jiaju">
                            <span>家具城</span>
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
                        <div className="jiancai">
                            <span>建材城</span>
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
                        <div className="jiashi">
                            <span>家具家饰</span>
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
                        <div className="zhuangxiu">
                            <span>装修效果图</span>
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
                    </div>
                </nav>
                <main>
                    <div className="like">
                        <span>猜你喜欢       </span>
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

                </footer>
                {/*注释：公共底部*/}
                <FooterComponent />
            </div>
        )
    }
}

export default homeComponent