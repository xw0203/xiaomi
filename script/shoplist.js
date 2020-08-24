
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

