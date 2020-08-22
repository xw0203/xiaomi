// 下载，head app
  $(function(){
    $('.download').mousemove(function(){
    $('.down-box').show();
    })
    $('.download').mouseleave(function(){
    $('.down-box').hide();
    })
    $('.download').mouseleave(function(){
    $('.down-box').hide();
    })
    $('.topBar_shop').mousemove(function(){
    $(this).css('background','white');

    })
    $('.topBar_shop').mousemove(function(){
    $(this).css('background','white');
    $('.pop').show() 
    })
    
    $('.topBar_shop').mouseleave(function(){
    $(this).css('background','');
    $('.pop').hide()
    })

//头部导航
    $('.header').on('mouseenter','.nav_item',function(){
    $(this).find('.nav_pop').stop(true).slideDown().css('display','block');
     console.log( $(this))
    })
      $('.nav_list').on('mouseleave','.nav_item',function(){
      $(this).find('.nav_pop').stop(true).slideUp(1000, 'swing').css('display','none');
    })

    // 侧边导航
    $('.header').on('mouseenter','.nav',function(){
    $('.slider_nav').show();
    })
    $('.header').on('mouseleave','.nav',function(){
    $('.slider_nav').hide();
    })

    $('.slider_ul').on('mouseenter','.slider-li', function(){
    var index = $(this).index();
    $(this).addClass('active');
    $(this).find('.slider_pop').show();
    })
    $('.slider_ul').on('mouseleave','.slider-li', function(){
    $(this).removeClass('active')
    var index = $(this).index()
    $(this).find('.slider_pop').hide();
    })
  })

  // 头顶搜索框部分
  var search_arr = ['小米Redmi', '电话', '耳机', '手机', '衣服']; 
  var index = 0;
  var search_timer = setInterval(function(){
    if(index >search_arr.length-1){
      index = 0;
    }else{
      index++;
    }
  $('.ipt').val(search_arr[index]);
  }, 3000);
  console.log(44)
  $('.log_search').on('click','.ipt' ,function(){
    clearInterval(search_timer);
    $('.data').show();
  })
  $('.log_search').on('click','li', function(){
    var index = $(this).index();
    var txt =$(this).find('span').text();
    txt = txt.trim(txt);
    $('.ipt').val(txt);
    console.log(txt)
    clearInterval(search_timer);
  })
  $('.data').mouseleave(function(){
    $(this).hide();
  })
    
 
  // 查看更多
  $('.idx-title').on('click','.see-all', function(){
    location.assign('./pages/listpage.html');
});







// 渲染视频
$.ajax({
    type: 'get',
    url:'../data/data.json',
    dataType:'json',
    success: function(data){
        console.log(data);
        var info = data[data.length-1].childs;
        for(var i=0;i< 4;i++) {
            var dom = `
            <div class="vid">
                      <div class="pic">
                      <video src="${info[i].src}" controls height="100%" width="100%"></video>
                      </div>
                      <h3 class="name"><a href="">${info[i]['title']}</a></h3>
                      <h4 class="desc">Redmi 10X系列发布会</h4>
              </div>`
            $('.pic').eq(i).find('.desc').text(info[i]['title']);
            $('.video_box').append(dom);
        }
      },
      error: function(){
      alert('请求失败');
    }
  })
var Video = document.querySelector('.pic video');
var Video=$('.box .video');
console.log(Video);
var close = document.querySelector('.close');
console.log(close);
// console.log(Video);
$('.wrap').on('click', '.vid', function(){
  // console.log(Video);
$('.win').show();
  // Video[0].play();  
})
$('.win').on('click', '.info .close', function(){
  console.log(44)
$('.win').hide();
})



