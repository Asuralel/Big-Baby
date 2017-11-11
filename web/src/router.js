import React from 'react';
import {Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import TestComponent from "./modules/test/TestComponent";

export default (
    <Route path="/" component={AppComponent}>
    	<IndexRoute />
        <Route path="login" component={LoginComponent} />
        <Route path="test" component={TestComponent} />
    </Route>
)