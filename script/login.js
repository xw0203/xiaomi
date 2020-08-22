$(function(){
    // 二维码隐藏
    $('.s_login').mouseenter(function(){
        $('.erweima').show();
        $('.none').hide();
    })
    $('.s_login').mousemove(function(){
        $('.erweima').show();
        $('.none').hide();
    })
//   <!-- 手机短信登录/注册 -->
    $('.tab_login').click(function(){
        $('.cell-phone').show();
        $('.none').hide();
    })

    var user = document.querySelector('.user');
    var pass = document.querySelector('.pass');
    var err = document.querySelector('.err');
    user.oninput = function(){
        var regUser = /^\w{8,20}$/;
        if ( !regUser.test(this.value)){
            err.innerHTML = '此账号不合法';
            $('.err').show();
             return false;
    
        }
        else{
            err.innerHTML ='';
        }
    } 
    pass.oninput = function(){
        var regPass =/^\w{8,20}$/;
        if ( !regPass .test(this.value) ){
            err.innerHTML = '请输入正确的密码格式';
            $('.err').show();
            return false;
        }
        else{ 
            err.innerHTML ='';
        }
    }
    var user = $('.user').val();
    var pass = $('.pass').val();
    var log_in =$('.log-in').val();
    var user = $('.user').val();
    var pass = $('.pass').val();
    console.log(user)
    $('.log_in').click(function(){
        var user = $('.user').val();
        var pass = $('.pass').val();
        if(!user || !pass){
            err.innerHTML = '用户名或密码不能为空';
            $('.err').show();
            console.log(user)
            return false;
        }
         var data =`user=${user}&pass=${pass}&type=log_in`;
        $.ajax({
            url: 'http://localhost/xiaomi/gulp-cli/dist/php/login.php',
            type: 'get',
            data: data,
            dataType: 'json',
            success: function (data){
                if(data.err == 1){
                    err.innerHTML = '登录成功';
                    $('.err').show();
                    location.assign('../pages/index1.html');
                }
                else if(data.err == 2){
                    err.innerHTML = '用户名已被占用';
                    $('.err').show();
                }
            },
            error: function (status){
                console.log('提交失败');
            }
        });
    
    })

})