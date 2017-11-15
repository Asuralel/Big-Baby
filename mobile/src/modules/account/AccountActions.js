import * as constants from '../../redux/commonConstant'

export function accountInit(obj){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'account/account.php',
        method: 'get',
        query:{
            username:obj.username
        }
    }
 
}