//执行 GET 请求

// 向具有指定ID的用户发出请求
axios.get('/user?ID=12345')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
 
// 也可以通过 params 对象传递参数
axios.get('/user', {
params: {
ID: 12345
}
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


//执行 POST 请求

axios.post('/user', {
firstName: 'Fred',
lastName: 'Flintstone'
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


//执行多个并发请求

function getUserAccount() {
return axios.get('/user/12345');
}
 
function getUserPermissions() {
return axios.get('/user/12345/permissions');
}
 
axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
//两个请求现已完成
}));




//这里的config是对一些基本信息的配置，比如请求头，baseURL，当然这里提供了一些比较方便配置项


//config
import Qs from 'qs'
{
  //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  url: '/user',

  // 请求方法同上
  method: 'get', // default
  // 基础url前缀
  baseURL: 'https://some-domain.com/api/',
　　
　　　　
  transformRequest: [function (data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
　　data = Qs.stringify({});
    return data;
  }],

  transformResponse: [function (data) {
    // 这里提前处理返回的数据

    return data;
  }],

  // 请求头信息
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  //parameter参数
  params: {
    ID: 12345
  },

  //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {
    firstName: 'Fred'
  },

  //设置超时时间
  timeout: 1000,
  //返回数据类型
  responseType: 'json', // default

 
}


//也可以这样配置
axios.create（[config]）

var instance = axios.create({
baseURL: 'https://some-domain.com/api/',
timeout: 1000,
headers: {'X-Custom-Header': 'foobar'}
});


//或这样修改axios全局默认值

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



//使用 then 时，将收到如下响应：

axios.get('/user/12345')
.then(function(response) {
console.log(response.data);
console.log(response.status);
console.log(response.statusText);
console.log(response.headers);
console.log(response.config);
});
