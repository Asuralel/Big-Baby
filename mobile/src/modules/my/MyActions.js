import loginToken from '../login/logintoken';
// import * as constants from '../../redux/commonConstant';

// console
export function MyActions(){
    var token = '';
    var tokenName
    var cookies = document.cookie;
    var arr_cookie = cookies.split('; '); 
    arr_cookie.forEach(function(item){ 
        var temp = item.split('=');
        if(temp[0] === 'token'){
            tokenName = temp[0]
            token = temp[1];
        }
    });
    return {
          types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
          path: 'my/login.php',
          method: 'post',
          query: {token}
    }
}
// export function userQuit(){
//     return {
//           type:'gg',
//           query: false
//       }
// }