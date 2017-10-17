##JavaScript有用的代码片段和trick

**浮点数取整**
    
    const x = 123.4545;
    x >> 0; // 123
    ~~x; // 123
    x | 0; // 123
    Math.floor(x); // 123
    注意：前三种方法只适用于32个位整数，对于负数的处理上和Math.floor是不同的。
    
    Math.floor(-12.53); // -13
    -12.53 | 0; // -12
  

**生成6位数字验证码**
    
    // 方法一
    ('000000' + Math.floor(Math.random() *  999999)).slice(-6);
    
    // 方法二
    Math.random().toString().slice(-6);
    
    // 方法三
    Math.random().toFixed(6).slice(-6);
    
    // 方法四
    '' + Math.floor(Math.random() * 999999);  

**16进制颜色代码生成**
    
    (function() {
      return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
    })();  

**驼峰命名转下划线**
    
    'componentMapModelRegistry'.match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g).join('_').toLowerCase(); // component_map_model_registry  

**url查询参数转json格式**
    
    // ES6
    const query = (search = '') => ((querystring = '') => (q => (querystring.split('&')  
    .forEach(item => (kv => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))), q))({}))(search.split('?')[1]);
    
    // 对应ES5实现
    var query = function(search) {
      if (search === void 0) { search = ''; }
      return (function(querystring) {
    if (querystring === void 0) { querystring = ''; }
    return (function(q) {
      return (querystring.split('&').forEach(function(item) {
    return (function(kv) {
      return kv[0] && (q[kv[0]] = kv[1]);
    })(item.split('='));
      }), q);
    })({});
      })(search.split('?')[1]);
    };
    
    query('?key1=value1&key2=value2'); // es6.html:14 {key1: "value1", key2: "value2"}
  
**获取URL参数**

    function getQueryString(key){
      var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null){
      return  unescape(r[2]);
      }
      return null;
    }
