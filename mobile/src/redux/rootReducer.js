import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'
import myset from '../modules/my/myset/mysetreduces'
import register from '../modules/register/registerReducer';
const rootReducer = combineReducers({
    login,
    register,
    myset,
    router
})

export default rootReducer