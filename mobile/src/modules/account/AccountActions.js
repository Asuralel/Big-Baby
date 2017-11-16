import * as constants from '../../redux/commonConstant'

export function accountInit(obj){
    return {
        types: ['ACCOUNT_REQUEST', 'ACCOUNT_SUCCESS', 'ACCOUNT_FAILURE'],
        path: 'account/account.php',
        method: 'get',
        query:{
            username:obj.username
        }
    }
 
}