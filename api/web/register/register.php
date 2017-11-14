<?php

	include '../../common/connect.php';
    header("Access-Control-Allow-Origin: *");
	
	$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
	$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '123456';
	$gender = isset($_REQUEST['gender']) ? $_REQUEST['gender'] : '';
	$phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : '';
	$address = isset($_REQUEST['address']) ? $_REQUEST['address'] : '';
	$objs = isset($_REQUEST['objs']) ? $_REQUEST['objs'] : '';
    $objs = json_decode($objs);
echo "$objs";
	//查看用户名是否已经存在

	$sql = "select user_name from user where user_name='$objs->username'";
	echo "$sql";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		echo "fail";
	}else{
		// 密码md5加密
		// md5()
		// echo "$password <br>";
		// $password = md5($password);
		// echo "$password <br>";

		
			// password_hash()     //对密码加密.
			// 	* PASSWORD_DEFAULT：Bcrypt加密算法，字段超过60个字符长度，
			// 	* PASSWORD_BCRYPT：字符串长度总为60。
			// password_verify()    //验证已经加密的密码，检验其hash字串是否一致.
		 
		// $password = password_hash($password,PASSWORD_DEFAULT);

		$sql = "insert into user (user_name,user_password,user_gender,user_phone,user_address) values('$objs->username','$objs->password','$objs->gender','$objs->address','$objs->phone')";


		// 获取查询结果
		$result = $conn->query($sql);

		if ($result) {
		    echo "ok";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	
	

	// 释放查询内存(销毁)
	$result->free();

	//关闭连接
	$conn->close();
?>