<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;


    if($username){
        $sql = "select * from buycar where username= '$username'";
        // echo '2';
            echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
    }
?>