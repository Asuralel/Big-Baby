import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'
import myset from '../modules/my/myset/mysetreduces'
import register from '../modules/register/registerReducer';
import myedit from '../modules/my/myset/address/addressEdit/editreduce'
const rootReducer = combineReducers({
    login,
    register,
    myset,
    myedit,
    router
})

export default rootReducer