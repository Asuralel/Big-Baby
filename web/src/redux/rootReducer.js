import login from '../modules/login/LoginReducer';
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux';
import test from '../modules/test/TestReducer';
import home from '../modules/home/HomeReducer';
import product from '../modules/product/ProductReducer';
import user from '../modules/user/UserReducer';
import order from '../modules/order/OrderReducer';





const rootReducer = combineReducers({
    login,
    router,
    test,
    home,
    product,
    user,
    order
})

export default rootReducer