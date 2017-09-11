(function( window, undefined ) {
var 
    jQuery = {
        isReady:false,//�ĵ������Ƿ���ɵı�ʶ
        readyList:[],//��������
        //onload�¼�ʵ��
        ready : function(fn){
                //����Ǻ��������뵽��������
                if(fn && typeof fn == 'function' ){
                    jQuery.readyList.push(fn);
                }
                //�ĵ�������ɣ�ִ�к������С�
                if(jQuery.isReady){
                    for(var i = 0;i < jQuery.readyList.length ;i++){
                        fn = jQuery.readyList[i];
                        jQuery.callback(fn);
                    }
                    return jQuery;
                }
            },
        //�ص�
        callback : function(fn){
            fn.call(document,jQuery);
        }
    };
    //��������
    window.$ = window.jQuery = jQuery;
    //�жϼ����Ƿ����
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