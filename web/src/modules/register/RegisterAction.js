import * as constants from '../../redux/commonConstant'

export function register(obj){console.log(obj)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'http://10.3.137.248/big_baby/api/web/register/register.php',
        method: 'post',
        query: {objs:JSON.stringify(obj)},
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