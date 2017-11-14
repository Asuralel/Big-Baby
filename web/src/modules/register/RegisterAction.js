import * as constants from '../../redux/commonConstant'

export function register(str)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'http://localhost/laoxie/api/web/register/register.php',
        method: 'post',
        query: str,
    }
}

