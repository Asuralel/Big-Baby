import * as constants from '../../redux/commonConstant'

export function Init(addUrl){console.log(addUrl)
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: addUrl
    }
    
}

export function add(api,str){console.log(api,str)
	var baseUrl = "http://localhost/big_baby/api/web/";
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        url: baseUrl+api+"_add.php",
        method: 'post',
        query: str
    }
}