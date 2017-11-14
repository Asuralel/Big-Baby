import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import HomeComponent from "./modules/home/HomeComponent";
import ProductComponent from "./modules/product/ProductComponent";
import UserComponent from "./modules/user/UserComponent";
import OrderComponent from "./modules/order/OrderComponent";
import RegisterComponent from "./modules/register/RegisterComponent";



export default (
    <Route path="/" component={AppComponent}>
<<<<<<< HEAD
	    <IndexRoute  component={LoginComponent}/>
=======
	    <IndexRoute component={LoginComponent}/>
>>>>>>> 7c58177717d7644638022f0e7c893822ae8e5023
	    <Route path="/register" component={RegisterComponent} />
    	<Route path="/home" component={HomeComponent}>
	        <Route path="/product" component={ProductComponent} />
	        <Route path="/user" component={UserComponent} />
	        <Route path="/order" component={OrderComponent} />
    	</Route>
    </Route>
)

