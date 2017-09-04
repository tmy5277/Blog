
// 自己编写ajax

function ajax(){
    //创建ajax对象
    //加上window.将XMLHttpRequesth转换成属性，而不是原有的对象，这样做是为了IE不让报错。
    if (window.XMLHttpRequest)
    {// IE7+, Firefox, Chrome, Opera, Safari
        var xmlhttp=new XMLHttpRequest();
    }
    else
    {// IE6, IE5
        var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //连接服务器
    xmlhttp.open('GET','a.txt'+ new Date().getTime(),true);
    //+ new Date().getTime() 应对缓存

    /*
     CONTENT-TYPE:application/x-www-form-urlencoded含义是表示客户端提交给服务器文本内容的编码方式是URL编码

     xmlhttp.open("POST","ajax_test.asp",true);
     setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gb2312")
     xmlhttp.send("fname=Bill&lname=Gates");
     */
    
    //发送请求
    xmlhttp.send();
    
    //接受返回
    xmlhttp.onreadystatechange=function () {
      /*
        readyState↓
        0: 请求未初始化
        1: 服务器连接已建立   (已发送请求)
        2: 请求已接收         (send()完成)
        3: 请求处理中
        4: 请求已完成，且响应已就绪  **无论成功与否

        status
        200 - 服务器成功返回网页
        404 - 请求的网页不存在
        503 - 服务器暂时不可用
       */

        if (xmlhttp.readyState==4)
        {
          if (xmlhttp.status==200)
          {

          }
          else if (xmlhttp.status==404){
            //可显示各种创意404页面
          }
          else
          {

          }
        }
    }


}