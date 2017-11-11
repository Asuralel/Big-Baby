import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import BuycarComponent from './modules/buycar/BuycarComponent'
import homeComponent from './modules/home/homeComponent'
import myComponent from './modules/my/myComponent'
import sortComponent from './modules/sort/sortComponent'
import listComponent from './modules/list/listComponent'
import detailsComponent from './modules/details/detailsComponent'


export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="buycar" component={BuycarComponent} />
        <Route path="home" component={homeComponent} />
        <Route path="my" component={myComponent} />
        <Route path="sort" component={sortComponent} />
        <Route path="list" component={listComponent} />
        <Route path="details" component={detailsComponent} />

    </Route>
)