import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import HomeComponent from "./modules/home/HomeComponent";
import ProductComponent from "./modules/product/ProductComponent";
import UserComponent from "./modules/user/UserComponent";
import OrderComponent from "./modules/order/OrderComponent";
import RegisterComponent from "./modules/register/RegisterComponent";
// import AddComponent from "./modules/datagrid/AddComponent";




export default (
    <Route path="/" component={AppComponent}>
	    <IndexRoute component={LoginComponent}/>
	    <Route path="/register" component={RegisterComponent} />
    	<Route path="/home" component={HomeComponent}>
	        <Route path="/product" component={ProductComponent}>
	        	
	        </Route>
	        <Route path="/user" component={UserComponent} />
	        <Route path="/order" component={OrderComponent} />
    	</Route>
    </Route>
)

