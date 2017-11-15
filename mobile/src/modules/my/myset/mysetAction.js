import * as constants from '../../../redux/commonConstant';
export function mysetinit(username){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'my/setMyMsg.php',
        method: 'post',
        query: {username}
    }
}