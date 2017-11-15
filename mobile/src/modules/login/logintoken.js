import request from 'superagent';
function loginToken(callback){
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
//   request
//        .post('http://localhost:888/my/login.php')
//        .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
//        .query({})
//        .send({token})
//        .end((err, res) => {
//             // return res.text
//             if(!res.text){
//                 var date = new Date();
//                 date.setDate(date.getDate() -100);
//                 document.cookie = "token=" + token + ";expires=" + date.toUTCString();
//                 callback(res.text)
//             }
//             else{
//                 callback(res.text)
//             }
//        })
// return {
//       types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//       path: 'my/login.php',
//       method: 'post',
//       query: {token}
//   }
}
export default loginToken