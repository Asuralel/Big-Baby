import * as constants from '../../redux/commonConstant'

export function login(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'http://10.3.137.248/big_baby/api/web/login/login.php?username='+username+"&password="+password,
        method: 'post',
        query: {username, password}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }