import React from 'react';
import {Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import BuycarComponent from './modules/buycar/BuycarComponent';
import AccountComponent from './modules/account/AccountComponent';
import homeComponent from './modules/home/homeComponent';
import myComponent from './modules/my/myComponent';
import sortComponent from './modules/sort/sortComponent';
import myHome from './modules/my/MyHome';
import listComponent from './modules/list/listComponent';
import detailsComponent from './modules/details/detailsComponent';
import myOrderComponent from './modules/my/MyOrder/MyOeder';
import myCollectComponent from './modules/my/myCollect/myCollect.js';
import MySetComponent from './modules/my/myset/mySet';
import AccSevurityComponent from './modules/my/accountSecurity/accSecurity';
import descComponent from './modules/details/descComponent.js';
import ratingComponent from './modules/details/rating/ratingComponent.js'
import RegisterComponent from './modules/register/registerComponent';
import agreement from './modules/register/agreement';
import address from './modules/my/myset/address/address';
import myEdit from './modules/my/myset/address/addressEdit/addressEdit'
export default (
    <Route path="/" component={AppComponent}>
        <Route path="register" component={RegisterComponent}/>
        <Route path="login" component={LoginComponent} />
        <Route path="buycar" component={BuycarComponent} />
        <Route path="account" component={AccountComponent} />
        <Route path="home" component={homeComponent} />
        <Route path="my" component={myComponent} >
            <Route path='/my/myHome' component={myHome}/>
            <Route path='/my/myOrder/:key' component={myOrderComponent}/>
            <Route path='/my/myCollect' component={myCollectComponent}/>
            <Route path='/my/mySet' component={MySetComponent} />
            <Route path='/my/mySecurity' component={AccSevurityComponent}/>
            <Route path='/register/agreement' component = {agreement}/>
            <Route path = '/my/mySet/address' component = {address}/>
            <Route path="/my/mySet/edit" component={myEdit}/>
        </Route>
        <Route path="sort" component={sortComponent} />
        <Route path="list/:goodType" component={listComponent} />
        <Route path="details/" component={detailsComponent}>
        	<Route path="detailsDesc" component={descComponent}/>
        	<Route path="detailsRating" component={ratingComponent}/>
        </Route>
    </Route>
)