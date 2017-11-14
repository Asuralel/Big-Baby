
export function DataGridAction(api, params){console.log(api,params)
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: api,
        params:params
    }
}

