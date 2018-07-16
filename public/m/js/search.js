$(function(){
    var keywords=JSON.parse(localStorage.getItem('keywords'))||[];
    $('#searchBtn').on('click',function(){
        var keyword = $('#keyword').val();
        if(!keyword){
            alert('请输入关键字');
            return;
        }
        keywords.push(keyword);
        localStorage.setItem('keywords',JSON.stringify(keywords))
        location.href = `search-list.html?key=${keyword}`;
        var searchHref = "search-list.html?key="+encodeURI(keyword);
        location.href=searchHref;
    });
    if(localStorage.getItem('keywords')){
        var html =template('historySearchTpl',{data:keywords});
        $("#historySearch").html(html);
    }
    $('#clearHistory').on('tap',function(){
        localStorage.removeItem('keywords');
        $('#historySearch').html('');
    })
})