import {routerReducer as router} from 'react-router-redux';

import {combineReducers} from 'redux'

import login from '../modules/login/LoginReducer';
import buycar from '../modules/buycar/BuycarReducer';
import account from '../modules/account/accountReducer';
import register from '../modules/register/registerReducer';
import myset from '../modules/my/myset/mysetreduces'
import myedit from '../modules/my/myset/address/addressEdit/editreduce'
const rootReducer = combineReducers({
    login,
    register,
    myset,
    myedit,
    buycar,
    account,   
    router
})

export default rootReducer