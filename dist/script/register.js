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
console.log(11)
$('.reg_in').click(function(){
    var user = $('.user').val();
        var pass = $('.pass').val();
        if(!user || !pass){
            err.innerHTML = '用户名或密码不能为空';
            $('.err').show();
            console.log(user)
            return false;
        }
     var data =`user=${user}&pass=${pass}&type =reg_in`;
    $.ajax({
        url: 'http://localhost/xiaomi/gulp-cli/dist/php/register.php',
        type: 'get',
        data: data,
        dataType: 'json',
        success: function (data){
            // var json = JSON.stringify(data);
            if(data.err === 3){
                err.innerHTML = '注册成功';
                $('.err').show();
                location.assign('../pages/index1.html');
            }
            if(data.err === 2){
                err.innerHTML = '用户已被占用';
                $('.err').show();
                // $('.reg_in').location.href = '../pages/index1.html';
               
            }
            else{
                err.innerHTML = '注册失败';
                $('.err').show();
            }

            
        },
        error: function (status){
            console.log('提交失败');
        }
    });

})