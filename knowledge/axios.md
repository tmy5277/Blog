//ִ�� GET ����

// �����ָ��ID���û���������
axios.get('/user?ID=12345')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
 
// Ҳ����ͨ�� params ���󴫵ݲ���
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


//ִ�� POST ����

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


//ִ�ж����������

function getUserAccount() {
return axios.get('/user/12345');
}
 
function getUserPermissions() {
return axios.get('/user/12345/permissions');
}
 
axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
//���������������
}));




//�����config�Ƕ�һЩ������Ϣ�����ã���������ͷ��baseURL����Ȼ�����ṩ��һЩ�ȽϷ���������


//config
import Qs from 'qs'
{
  //����Ľӿڣ��������ʱ����axios.get(url,config);�����url�Ḳ�ǵ�config�е�url
  url: '/user',

  // ���󷽷�ͬ��
  method: 'get', // default
  // ����urlǰ׺
  baseURL: 'https://some-domain.com/api/',
����
��������
  transformRequest: [function (data) {
    // ��������ڷ�������֮ǰ��������������������form-data��ʽ���ȣ��������ʹ�ÿ�ͷ�����Qs�����ģ���ڰ�װaxios��ʱ����Ѿ���װ�ˣ�����Ҫ���ⰲװ��
����data = Qs.stringify({});
    return data;
  }],

  transformResponse: [function (data) {
    // ������ǰ�����ص�����

    return data;
  }],

  // ����ͷ��Ϣ
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  //parameter����
  params: {
    ID: 12345
  },

  //post������ʹ��axios.post(url,{},config);���û�ж����Ҳ����Ҫ��һ���ն��󣬷���ᱨ��
  data: {
    firstName: 'Fred'
  },

  //���ó�ʱʱ��
  timeout: 1000,
  //������������
  responseType: 'json', // default

 
}


//Ҳ������������
axios.create��[config]��

var instance = axios.create({
baseURL: 'https://some-domain.com/api/',
timeout: 1000,
headers: {'X-Custom-Header': 'foobar'}
});


//�������޸�axiosȫ��Ĭ��ֵ

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



//ʹ�� then ʱ�����յ�������Ӧ��

axios.get('/user/12345')
.then(function(response) {
console.log(response.data);
console.log(response.status);
console.log(response.statusText);
console.log(response.headers);
console.log(response.config);
});
