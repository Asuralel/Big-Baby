import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import homeComponent from './modules/home/homeComponent'
import myComponent from './modules/my/myComponent'
import sortComponent from './modules/sort/sortComponent'
import cartComponent from './modules/cart/cartComponent'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="home" component={homeComponent} />
        <Route path="my" component={myComponent} />
        <Route path="sort" component={sortComponent} />
        <Route path="cart" component={cartComponent} />
    </Route>
)