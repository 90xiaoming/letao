$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    
    });
    // 左边模板的请求
    $.ajax({
        type: "get",
        url: "/category/queryTopCategory",
        // data: "d,ata"
        // dataType: "dataType",
        success: function (response) {
            // console.log(response);
            var html =template('category-first',{result:response.rows});
            $('.links').html(html);
        }
    });
    // 点击左边出现右边的请求
    $('body').on('tap','.getSecond',function(){
      var id = $(this).attr('data-id');
        
    //   console.log(id)
        $(this).addClass('active').siblings().removeClass('active');
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            data: {
                id:id
            },
            success: function (result) {
                // console.log(result)
                var p =template('category-Second',{data:result.rows})
                console.log(p)
               $('#rightCate').html(p) ;
            }
            
        });
    
    
    })
})
