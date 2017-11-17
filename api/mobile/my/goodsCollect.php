<?php

    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $GoodsId = isset($_REQUEST['goodsId']) ? $_REQUEST['goodsId'] : 1;
    // echo "$username";

<<<<<<< HEAD
    $sql = "select user_collect from users where user_name= '$username'";
    $cont = query($sql)[0]->user_collect . "," . "$GoodsId";

    $sql1 = "update users set user_collect='$cont' where user_name='$username'";
=======
//  echo $cont;
    $sql1 = "update users set user_collect='$GoodsId' where user_name='$username'";
>>>>>>> ed6fe12b71e44fbb62816702729b1b3b5a61629c
    if(excute($sql1)){
        echo "ok";
    }

<<<<<<< HEAD
?>
=======
?>
>>>>>>> ed6fe12b71e44fbb62816702729b1b3b5a61629c
