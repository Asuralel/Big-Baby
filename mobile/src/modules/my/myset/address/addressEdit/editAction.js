// import loginToken from '../login/logintoken';
import * as constants from '../../../../../redux/commonConstant';

// console
export function addressInit(address,username){
    console.log(address)
    return {
          types: ['EDIT_REQUEST', 'EDIT_SUCCESS', 'EDIT_FAILURE'],
          path: 'my/selectMsg',
          method: 'post',
          query: {
            address,
            username
          }
    }
}
export function userQuit(){
}