<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type:text/html;charset=utf-8');
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];

// 1.连接数据库
$link = mysqli_connect('localhost','root','root','db_gp03');
if (!$link) {
    echo '{"err":0,"msg":"连接失败"}';
    die();
}
// if(!$pass){
//     $ad_sql = "select * from user1 where pass='$pass'";
//     $ad_res = mysqli_query($link,$ad_sql);
//     $ad_arr = mysqli_fetch_all($ad_res);
//     if (count($ad_arr) > 0) {
//         echo '{"err":5,"msg":"密码不能为空"}';
//         die();
//     }

// }
    


// 2.设置字符集
mysqli_set_charset($link,'utf8');
    $login_sql = "select * from user1 where user='$user' and pass='$pass'";
    $login_res = mysqli_query($link,$login_sql);
    $login_arr = mysqli_fetch_all($login_res);
    if (count($login_arr) > 0) {
        echo '{"err":1,"msg":"登录成功"}';
    } else {
         echo '{"err":-1,"msg":"账号或密码错误"}';
    }

// 关闭连接
mysqli_close($link);

?>