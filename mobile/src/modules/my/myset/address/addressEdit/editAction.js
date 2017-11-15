// import loginToken from '../login/logintoken';
import * as constants from '../../../../../redux/commonConstant';

// console
export function addressInit(address,username){
    console.log(address)
    return {
          types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
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