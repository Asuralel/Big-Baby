<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $addresEdit = isset($_REQUEST['address']) ? $_REQUEST['address'] : 1;
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;

    $sql = "select * from users where user_name = '$addresEdit'";

    echo json_encode(query($sql)[0],JSON_UNESCAPED_UNICODE);

?>