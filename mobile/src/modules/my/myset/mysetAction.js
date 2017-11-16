import * as constants from '../../../redux/commonConstant';
export function mysetinit(username){
    if(username){
        return {
            types: ['MYMSG_REQUEST', 'MYMSG_SUCCESS', 'MYMSG_FAILURE'],
            path: 'my/setMyMsg.php',
            method: 'post',
            query: {username}
        }
    }
}