import * as constants from '../../redux/commonConstant'

export function buycarInit(obj){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'buycar/buycar.php',
        method: 'get',
        query:{
            username:obj.username,
            list:obj.list ? obj.list : null,
            account:obj.account ?  obj.account : null
        }
    }
 
}