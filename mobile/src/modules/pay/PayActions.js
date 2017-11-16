import * as constants from '../../redux/commonConstant'

export function payInit(obj){
    return {
        types: ['PAY_REQUEST', 'PAY_SUCCESS', 'PAY_FAILURE'],
        path: 'account/account.php',
        method: 'get',
        query:{
            username:obj.username
        }
    }
 
}