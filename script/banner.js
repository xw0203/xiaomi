// 轮播
var banPrev = document.querySelector(".banner-prev");
var banNext = document.querySelector(".banner-next");
var banImgs = document.querySelectorAll(".banner-cCon img");
var banCLi = document.querySelectorAll(".banner-num li");

var timer;
var showindex = 0;
var previndex = 0;
animate(banImgs[showindex],{'opacity':1},function(){
        timer = setInterval(function () {
            banmovenext();
        }, 3000)
})

function banmovenext (){
    banImgs[previndex].className ='';
    banCLi[previndex].className = '';
    banImgs[previndex].style.opacity = 0.02;

    showindex++;
    if (showindex >= banImgs.length-1){
        showindex = 0;
    }
    banImgs[showindex].className = 'banner-show';
    banCLi[showindex].className = 'banner-active';
    previndex = showindex;

    animate(banImgs[showindex],{'opacity':1});
}
function banmoveprev (){
    banImgs[previndex].className ='';
    banCLi[previndex].className = '';
    banImgs[previndex].style.opacity = 0.02;

    showindex--;
    if (showindex < 0){
        showindex = banImgs.length-1;
    }
    banImgs[showindex].className = 'banner-show';
    banCLi[showindex].className = 'banner-active';
    previndex = showindex;

    animate(banImgs[showindex],{'opacity':1});
}
banPrev.onclick = function(){
    clearInterval(timer);
    clearInterval(banImgs[showindex].timer);

    banmoveprev();
    timer = setInterval(function () {
        banmovenext();
    }, 3000)
}

banNext.onclick = function () {
    clearInterval(timer);
    clearInterval(banImgs[showindex].timer);

    banmovenext();
    timer = setInterval(function () {
        banmovenext();
    }, 3000)
}

for (var i = 0; i < banCLi.length ; i++){
    banCLi[i].index = i;
    banCLi[i].onclick = function(){
        clearInterval(timer);
        clearInterval(banImgs[showindex].timer);
         banImgs[previndex].className = '';
         banCLi[previndex].className = '';
         banImgs[previndex].style.opacity = 0.02;

        showindex = this.index;
        banImgs[showindex].className = 'banner-show';
        banCLi[showindex].className = 'banner-active';
        previndex = showindex;

        animate(banImgs[showindex],{'opacity':1});
        timer = setInterval(function () {
            banmovenext();
        }, 3000)

    }
 }

 //1.实现倒计时（2020/10/16）
 var box = document.querySelector('.box');
 var spa1 =document.querySelector('.spa1');
 var spa2 = document .querySelector('.spa2');
 var spa3 = document.querySelector('.spa3');
 console.log(spa3)
 function zero(n){
    return n < 10 ? '0'+ n:n;
 }
 setInterval(function() {
  
 var date = new Date()//获取当前的时间
 var endtime = new Date('2020/11/1')//未来自己设定的时间
 // console.log(endtime)
 var totalT =parseInt(endtime.getTime() -date.getTime())/1000;//未来时间 -当前时间的时间戳 因为本身他是以ms为单位的，我们要以m为单位，所以要除以1000
// console.log(totalT)
 //将时间戳转为 时分秒天
    var day = parseInt(totalT /(60*60*24));//天数
     var h =parseInt( totalT/(60*60) % 24);//小时
     var m = parseInt(totalT/60 % 60);//分钟
     var s = parseInt(totalT%60);//秒
     //天时分秒小于10 在前面补零
     // 通过函数调用的方式实现
     day = zero(day);
     h = zero(h);
     m =zero(m);
     s = zero(s);
     //将结果 渲染到页面上、
      spa1.innerHTML= h;
      spa2.innerHTML= m;
      spa3.innerHTML= s;
 }, 1000);

  //滚动条轮播小米闪购
var lunBoModule = (function (){
    var lunBo = $1('.page_ul');
    var lunBoCon = $1('.con');
    var btnPrev = $1('.btn1');
    var btnNext = $1('.btn2');
    var con = document.querySelectorAll('.main');
    var newCon = document.createElement('ul');
    newCon.className = 'main';
    lunBoCon.appendChild(newCon);
    newCon.innerHTML = con[0].innerHTML;

    var len = con.length;
    var timer1,timer2,flag = 1;
    var Bwidth = newCon.clientWidth;
    //滚动条向右


    setInterval(()=>{
        lunBo.scrollLeft++;
        if (lunBo.scrollLeft % newCon.clientWidth === 0){
            clearInterval(timer1);
            timer2 = setTimeout(()=>{
                moveLeft();
            },2000)
        }
        if (lunBo.scrollLeft >= (newCon.clientWidth * len)) {
           lunBo.scrollLeft = 0;
        }
    },50);

    function moveLeft(){
        // console.log(123);
        timer1 = setInterval(()=>{
            lunBo.scrollLeft++;
            if (lunBo.scrollLeft % newCon.clientWidth === 0){
                clearInterval(timer1);
                timer2 = setTimeout(()=>{
                    moveLeft();
                },2000)
            }
            if (lunBo.scrollLeft >= (newCon.clientWidth * len)) {
               lunBo.scrollLeft = 0;
            }
        },10);
    }
    moveLeft();
    //向右边滚动
    function moveRight() {
        timer1 = setInterval(() => {
            lunBo.scrollLeft--;
            if (lunBo.scrollLeft % newCon.clientWidth === 0) {
                clearInterval(timer1);
                timer2 = setTimeout(() => {
                    moveRight();
                }, 2000)
            }
            if (lunBo.scrollLeft <= 0 ) {
                lunBo.scrollLeft = newCon.clientWidth * len;
            }
        }, 10);
    }
    //点击切换
    function clickPrev(Bwidth) {
        animate(lunBo, { 'scrollLeft':  Bwidth});
    }   

    //添加向左点击事件
    btnPrev.onclick = function(){
        clearInterval(timer1);
        clearInterval(timer2);
        //判断当前滚动条
        if (lunBo.scrollLeft < Bwidth){
            clickPrev( Bwidth);
        } else if (lunBo.scrollLeft >=  Bwidth && lunBo.scrollLeft <  Bwidth*2){
            clickPrev(2* Bwidth);
        } else if (lunBo.scrollLeft >= 2* Bwidth&& lunBo.scrollLeft <  Bwidth * 3) {
            clickPrev(3 * Bwidth);
        }
        flag = 1;
    }
    //向右事件
    btnNext.onclick = function () {
        clearInterval(timer1);
        clearInterval(timer2);
        //判断当前滚动条
        if (lunBo.scrollLeft <=  Bwidth) {
            clickPrev(0);
        } else if (lunBo.scrollLeft >  Bwidth && lunBo.scrollLeft <=  Bwidth * 2) {
            clickPrev( Bwidth);
        } else if (lunBo.scrollLeft > 2 *  Bwidth && lunBo.scrollLeft <=  Bwidth * 3) {
            clickPrev(2 *  Bwidth);
        }
        // moveRight();
        flag = 0;
    }
    lunBo.onmouseenter = function () {
        clearInterval(timer1);
        clearInterval(timer2);
    }
    lunBo.onmouseleave = function () {
        clearInterval(timer1);
        clearInterval(timer2);
        if (flag) {
          moveLeft();
        } else {
            moveRight();
           
        }
    }
})();
 