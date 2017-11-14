import * as constants from '../../redux/commonConstant'

export function register(obj){
    console.log(777)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'mobile/my/register.php',
        method: 'post',
        query: {
            username:obj.username,
            tel:obj.tel,
            password:obj.password,
            user_id:Math.random()*100000
        }
    }
}