import login from '../modules/login/LoginReducer';
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux';
import test from '../modules/test/TestReducer';


const rootReducer = combineReducers({
    login,
    router,
    test
})

export default rootReducer