<?php
//允许所有域名发起的跨域请求，可以使用通配符 *
header("Access-Control-Allow-Origin: *");
// $mysql_conf = array(
//     'host'    => '127.0.0.1:3306', 
//     'db'      => 'qingsongdian', 
//     'db_user' => 'root', 
//     'db_pwd'  => '', 
//     );
// $pdo = new PDO("mysql:host=" . $mysql_conf['host'] . ";dbname=" . $mysql_conf['db'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);//创建一个pdo对象
// $pdo->exec("set names 'utf8'");
// $sql = "select * from comment";
// $stmt = $pdo->prepare($sql);
// $stmt->bindValue(1, 'joshua', PDO::PARAM_STR);
// $rs = $stmt->execute();


// if ($rs) {
//     // PDO::FETCH_ASSOC 关联数组形式
//     // PDO::FETCH_NUM 数字索引数组形式

//     while ($row = $stmt->fetch(PDO::FETCH_NUM)) {
//         $res=json_encode($row,JSON_UNESCAPED_UNICODE);
//         echo "$res";
//     }
// }


// $pdo = null;//关闭连接




//建立数据库的链接
// @$_mysqli = new mysqli('localhost','root','','qingsongdian');
// if(mysqli_connect_errno()){
//     echo 'mysqli Connect is error'.mysqli_connect_error();
//     exit();
// }
// //设置客户端字符编码
// $_mysqli->set_charset('utf8');
// //数据库查询语句
// $sqli= "SELECT * FROM comment";

// //运行查询语句
// $result=$_mysqli->query($sqli);

// //循环出数据库数据  
//  while(!!$rows = $result->fetch_assoc()){
//     $res=json_encode($rows,JSON_UNESCAPED_UNICODE);
//     print_r($res);  //遍历出所有数据
//          // $rows['title'].'<br />'; //遍历某个字段的数据
//  }
  


// $result ->free();

// $_mysqli->close();





    // 配置参数
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'qingsongdian';

    // 1）连接数据库
    $conn = new mysqli($servername,$username,$password,$database);

    // 检测连接
    if($conn->connect_errno){
        die('连接失败：'.$conn->connect_error);
    }

    // 设置字符集
    $conn->set_charset('utf8');

    // 编写查询sql语句
    $sql = 'select * from comment';

    // 利用sql语句查询数据库
    // 查询结果集
    $result = $conn->query($sql);


    // 使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);


    echo json_encode($row,JSON_UNESCAPED_UNICODE);


?>