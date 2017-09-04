var myObj = {};  
// hasData用来判断HTMLElement或JS对象是否具有数据  
console.log(jQuery.hasData(myObj));// false  
  
// data()添加属性  
$.data(myObj, 'name', 'aty');  
console.log(jQuery.hasData(myObj));// true  
  
// data()读取属性  
console.log($.data(myObj, 'name'));//aty  
  
// removeData删除属性  
$.removeData(myObj, 'name');  
console.log($.data(myObj, 'name'));//undefined  
  
// 如果所有属性都被删除,那么hasData返回false  
console.log(jQuery.hasData(myObj));// false 