import * as constants from '../../../redux/commonConstant';
import loginstate from '../../login/logintoken'
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
export  function loginInit(){
    return loginstate()
}