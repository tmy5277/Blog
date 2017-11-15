
##jQuery.extend()

定义与用法  
  
jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象。  

注意：  
1. 如果只为$.extend()指定了一个参数，则意味着参数target被省略。此时，target就是jQuery对象本身。通过这种方式，我们可以为全局对象jQuery添加新的函数。  
2. 如果多个对象具有相同的属性，则后者会覆盖前者的属性值。


----------

**插件封装形式的区别---调用方法不同**
  
    $.fn.extend  ->  $('*').function()   //先选择一个元素，然后再调用
    $.extend  ->  $.function()  		 //作为工具函数

