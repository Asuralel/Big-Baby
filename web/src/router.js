import React from 'react';
import {Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import TestComponent from "./modules/test/TestComponent";
import HomeComponent from "./modules/home/HomeComponent";
import ProductComponent from "./modules/product/ProductComponent";
import UserComponent from "./modules/user/UserComponent";
import OrderComponent from "./modules/order/OrderComponent";


export default (
    <Route path="/" component={AppComponent}>
    	<Route path="/home" component={HomeComponent}>
	        <Route path="/test" component={TestComponent} />
	        <Route path="/login" component={LoginComponent} />
	        <Route path="/product" component={ProductComponent} />
	        <Route path="/user" component={UserComponent} />
	        <Route path="/order" component={OrderComponent} />
    	</Route>
    </Route>
)