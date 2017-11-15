import * as types from '../../../../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            break;
        case types.SUCCESS:
            if(action.body=="紫禁城"){
               reState.addressMsg = action.body;
            
            }
            break; 
        case types.FAILURE:
            break;
        default :
            reState.loading = false  
    }
    return reState;
}