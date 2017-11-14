import * as constants from '../../redux/commonConstant'

export function register(str){console.log(str)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'http://localhost/laoxie/api/web/register/register.php',
        method: 'post',
        query: str,
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