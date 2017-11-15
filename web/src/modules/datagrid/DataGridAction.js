export function Init(sql){
	console.log(sql);
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'Datagrid.php',
        data:{
        	select:sql
        },
    }
}

export function Edit(editData){
    return {
        type: 'edit',
        data:editData
    }
}

export function ChangePage(sql){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'Datagrid.php',
        data:{
        	select:sql
        },
    }
}
export function Delete(sql){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'Datagrid.php',
        data:{
            else:sql
        },
    }
}