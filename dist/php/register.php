<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type:text/html;charset=utf-8');
// $ resDate =array("code":0,"message":"");
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];

// 1.连接数据库
$link = mysqli_connect('localhost','root','root','db_gp03');
if (!$link) {
    echo '{"err":0,"msg":"连接失败"}';
    die();
}
// 2.设置字符集
mysqli_set_charset($link,'utf8');

// 3.查询数据
if(!$pass){
    $ad_sql = "select * from user1 where pass='$pass'";
    $ad_res = mysqli_query($link,$ad_sql);
    $ad_arr = mysqli_fetch_all($ad_res);
    if (count($ad_arr) > 0) {
        echo '{"err":5,"msg":"密码不能为空"}';
        die();
    }

}
    
    $add_sql = "select * from user1 where user='$user'";
    $add_res = mysqli_query($link,$add_sql);
    $add_arr = mysqli_fetch_all($add_res);
    if (count($add_arr) > 0) {
        echo '{"err":2,"msg":"用户名已被占用"}';
        die();
    }
    $insert_sql = "insert into user1(user,pass) values('$user','$pass')";
    mysqli_query($link,$insert_sql);
    $num = mysqli_affected_rows($link);//返回受影响条数
    if ($num > 0) {
        echo '{"err":3,"msg":"注册成功"}';
    } else {
        echo '{"err":4,"msg":"注册失败"}';
    }

// 关闭连接
mysqli_close($link);

?>