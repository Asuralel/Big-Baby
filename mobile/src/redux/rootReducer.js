import login from '../modules/login/LoginReducer';
import {routerReducer as router} from 'react-router-redux';

import {combineReducers} from 'redux'

import buycar from '../modules/buycar/BuycarReducer';
import account from '../modules/account/accountReducer';
import register from '../modules/register/registerReducer';

const rootReducer = combineReducers({
    login,
    register,
    buycar,
    account,
    router
})

export default rootReducer