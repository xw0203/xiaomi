
//index page渲染
$.ajax({
    type: 'get',
    url:'../data/data.json',
    dataType:'json',
    cache: false,
    success: function(json){
        var json =json[0].childs;

        for(var i= 0;i< json.length-1;i++) {
            var dom = `
            <a href="./pages/shoplist.html?id=${json[i].id}" class="pic">
            <img src="${json[i].img}" alt=""></a>
            <h3 class="name"><a href="">${json[i].title}</a></h3>
            <h4 class="desc">120X 变焦/120W秒充/120Hz屏幕</h4>
            <p class="price"><span>${json[i].price}</span></p>
            `
            $('.good-item').eq(i).append(dom); 
        }
    },
    error: function(){
        alert('请求失败');
    }
})


// 详情页渲染

// $.ajax({
//     type: 'get',
//     url:'../data/goodsIteam.json',
//     dataType:'json',
//     cache: false,
//     success: function(arr){
//         var arr = arr[1] 
//         console.log(arr);
//         var dom =`
//         <img src="../image/h2.jpg" alt="">
//         ${arr[1].title} `
//         $('.x1').append(dom);
        
//         Tit();
//         function Tit(){
//             var dom = `<font class="title" color="#ff4a00">${arr[1].tip1}</font>
//             <h6 class="tit1">${arr[1].tip2}</h6>`
//             $('.tit_font').append(dom)
//         }
//         Tit2();
//         function Tit2(){
//             var dom = ` 小米自营`
//             $('.tit').append(dom);
//         }
//         Tit3()
//         function Tit3(){
//             var dom =` <span class="price_json">${arr[1].price}</span>`
//             $('.price_json').append(dom)
//         }
           
//             console.log(arr.type[0])
//         for( var i = 0, len = arr.type.length; i < len; i++ ){
//             if ( i === 0 ){
//                 var dom = ` <li class="active_style"><a href="javascript:;">${arr.type[i]}</a></li>`;
//             }
//             else{
//                 var dom = ` <li class="active_style"><a href="javascript:;">${arr.type[i]}</a></li></li>`;
//             }
//             $('.option_ul .list').append(dom);
//         }
//     },
//     error: function(){
//         alert('请求失败');
//     }
// })



var id = valueByName(location.search,"id");
//数据渲染
$.ajax({
    type:'get',
    url: '../data/goodsIteam.json',
    dataType:'json',
    success: function(json) {
       console.log(json)
        
        // img-box
        for(let i=0;i<json.length;i++){
            console.log(json[i])
           
        }
        
        //更改标题
        // $('h2').text('');
        // $('.sale-desc-red').text('');
        // $('.sale-desc').text('');

    },
    error: function() {
        alert('请求失败');
    }
})


function valueByName(search, name) {
    var start = search.indexOf(name + "=");
    if (start == -1) {
        return null;
    } else {
        var end = search.indexOf("&", start);
        if (end == -1) {
            end = search.length;
        }
        //提取出想要键值对 name=value
        var str = search.substring(start, end);
        var arr = str.split("=");
        return arr[1];
    }
}
