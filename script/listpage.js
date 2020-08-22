 // goods列表

$.ajax({
    type: 'get',
    url:'../data/data.json',
    dataType:'json',
    cache: false,
    success: function(json){
        var json =json[0].childs;
        console.log(json)
        for(var i= 0;i< json.length-1;i++) {
            var dom = `
            <a href="../pages/shoplist.html?id=${json[i].id}" class="pic">
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





// goods 横向底部
$.ajax({
    type: 'get',
    url:'../data/goodsList2.json',
    dataType:'json',
    cache: false,
    success: function(json){
       console.log(json)
       for(var i= 0;i< json.length-1;i++){
        var dom = `
        <li class="item_l">
        <a href="../shoplist.html?${json[i].product_id}">
            <img src="${json[i].image}" alt="">
        </a>
        <div class="txt">
            <div class="txt_l">
                <a  href="" class="aa">${json[i].name}</a>
                <p>${json[i].desc}</p>
               
            </div>
            <div class="txt_r">
                <p>
                    <span class="sup">￥</span>
                    <span class="price">${json[i].price}起</span>
                    <span>￥</span><del>5299</del>
                </p>
                <a href="" class="buy">立即抢购</a>
            </div>

        </div>
    </li>
    <li class="item_r">
        <a href="">
            <img src="${json[i+1].image}" alt="">
        </a>
        <div class="txt">
            <div class="txt_l">
                <a  href="" class="aa">${json[i+1].name}</a>
                <p>${json[i+1].desc}</p>
            </div>
            <div class="txt_r">
                <p>
                    <span class="sup">￥</span>
                    <span class="price">${json[i+1].price}起</span>
                    <span>￥</span><del>5299</del>
                </p>
                <a href="" class="buy">立即抢购</a>
            </div>

        </div>
        
    </li>`
        $('.list').append(dom);
       }
    },
    error: function(){
        alert('请求失败');
    }
})




