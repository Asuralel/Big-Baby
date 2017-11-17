<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $newpassword = isset($_REQUEST['newpas']) ? $_REQUEST['newpas'] : 666666;
    $wornpassword = isset($_REQUEST['wornpas']) ? $_REQUEST['wornpas'] : 666666;
    // echo "$username";
    // echo "$newpassword";
    // echo "$wornpassword ";
    $sql = "select * from users where user_name= '$username' and user_password='$wornpassword'";
    if(sizeof(query($sql))>0){
        $sql = "update users set user_password='$newpassword' where user_name='$username'";
        echo json_encode(excute($sql),JSON_UNESCAPED_UNICODE);
    }
    
?>