export function ProductInit(){
	//数据库名big_baby
	//服务器虚拟路径http://localhost/big_baby
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],

        url: 'http://10.3.137.248/big_baby/api/web/product/product.php',

    }
}



