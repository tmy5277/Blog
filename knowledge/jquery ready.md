    (function( window, undefined ) {
    var jQuery = {
    isReady:false,//文档加载是否完成的标识
    readyList:[],//函数序列
    //onload事件实现
    ready : function(fn){
    //如果是函数，加入到函数序列
    if(fn && typeof fn == 'function' ){
    jQuery.readyList.push(fn);
    }
    //文档加载完成，执行函数序列。
    if(jQuery.isReady){
    for(var i = 0;i < jQuery.readyList.length ;i++){
    fn = jQuery.readyList[i];
    jQuery.callback(fn);
    }
    return jQuery;
    }
    },
    //回调
    callback : function(fn){
    fn.call(document,jQuery);
    }
    };
    //导出对象
    window.$ = window.jQuery = jQuery;
    //判断加载是否完成
    var top = false;
    try {
    top = window.frameElement == null && document.documentElement;
    } catch(e) {}
    if ( top && top.doScroll ) {
    (function doScrollCheck() {
    try {
    top.doScroll("left");
    jQuery.isReady = true;
    jQuery.ready();
    } catch(e) {
    setTimeout( doScrollCheck, 50 );
    }
    })();
    }
    }(window));