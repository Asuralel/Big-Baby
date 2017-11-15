import * as constants from '../../redux/commonConstant';
export function login(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'my/login.php',
        method: 'post',
        query: {username, password}
    }
}