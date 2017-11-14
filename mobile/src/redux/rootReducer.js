import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

import register from '../modules/register/registerReducer';
const rootReducer = combineReducers({
    login,
    register,
    router
})

export default rootReducer