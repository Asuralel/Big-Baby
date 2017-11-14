import * as constants from '../../redux/commonConstant'

export function buycarInit(){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: '/api/web/order',
        method: 'get',
    }
 
}