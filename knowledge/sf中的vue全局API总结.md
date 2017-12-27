带图原文链接地址：http://www.cnblogs.com/douyae...  
1.extend用于创建一个子类Vue,用$mount来挂载
    
    <body>
    <div id="app"></div>
    <script>
    const app=Vue.extend({
    template:'<p>{{a}} {{b}} {{c}}</p>',
    data:function(){
    return {
    a:'Welcome',
    b:"To",
    c:"BeiJing"
    }
    }
    });
    new app().$mount("#app")
    
    </script>
    </body>
2.Vue.nextTick([callback,context])在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <body>
    <div id="app">
    <button @click="getTag">获取标签内容</button>
    <h1>{{message}}</h1>
    </div>
    <script>
    var app=new Vue({
    el:"#app",
    data:{
    message:"我爱北京天安门"
    },
    methods:{
    getTag:function(){
       this.message='我爱我家';
    console.log(document.querySelector('h1').innerHTML)
    
    }
    }
    });
    
    </script>
    </body>
    </html>
结果如下：

我们可以看到视图更新以后拿到的并不是更新后的innerHTML，因为dom结构更新是一个异步事件

再看下面的例子
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <body>
    <div id="app">
    <button @click="getTag">获取标签内容</button>
    <h1>{{message}}</h1>
    </div>
    <script>
    var app=new Vue({
    el:"#app",
    data:{
    message:"我爱北京天安门"
    },
    methods:{
    getTag:function(){
       this.message='我爱我家';
       this.$nextTick(function(){
       console.log(document.querySelector('h1').innerHTML)
       })
    
    }
    }
    });
    
    </script>
    </body>
    </html>
我们可以看到它会等dom结构更新完成后再去获取更新后的innerHTML值

3.Vue.set(target,key,value)普通的情况下对Vue实例里面的数据进行更改，数据改掉了，但是呈现在页面的视图并没有发生变化，所以借用该方法视图也会跟着刷新

普通方式视图并没有刷新

    <body>
    <div id="app"></div>
    <script>
       var app=new Vue({
       el:"#app",
       data:{
       arr:['北京','上海','天津','重庆']
       }
       });
    app.arr[0]='北京天安门';
    </script>
    </body>
set方式视图会刷新
    
    <body>
    <div id="app">
    <ul>
    <li v-for="item in arr">{{item}}</li>
    </ul>
    </div>
    <script>
       var app=new Vue({
       el:"#app",
       data:{
       arr:['北京','上海','天津','重庆']
       }
       });
    Vue.set(app.arr,0,'北京天安门');
    </script>
    </body>
 
4.Vue.delete(target,key)用法和原理与set添加元素是一样的道理

    <body>
    <div id="app">
    <ul>
    <li v-for="(val,key) in obj">{{key}}----{{val}}</li>
    </ul>
    </div>
    <script>
       var app=new Vue({
       el:"#app",
       data:{
       obj:{name:'张三',sex:'男',hobby:'睡大觉'}
       }
       });
    Vue.delete(app.obj,'hobby');
    </script>
    </body>
5.Vue.directive(id,[definition])指令函数，定义了以下几个钩子，每一个钩子都有参数el,指的是绑定的元素
    
    // 注册
    Vue.directive('my-directive', {
      bind: function () {},
      inserted: function () {},
      update: function () {},
      componentUpdated: function () {},
      unbind: function () {}
    })
    // 注册 (指令函数)
    Vue.directive('my-directive', function () {
      // 这里将会被 `bind` 和 `update` 调用
    })
    // getter，返回已注册的指令
    var myDirective = Vue.directive('my-directive')
bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
    
    <body>
    <div id="app">
     <div v-drop>Hello Vue!</div>
    </div>
    <script>
    Vue.directive('drop',{
    bind:function(el){
    el.style.color='red';
    el.style.fontWeight='bold'
    }
    });
    var app=new Vue({
    el:'#app'
    })
    </script>
    </body>
inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

一个照片墙拖曳例子
    
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
    .box{
    width: 800px;
    height: 800px;
    position: relative;
    background-color: #000000;
    margin: auto;
    }
    .img{
    position: absolute;
    left:0;
    top:0;
    transform: rotateZ(0deg);
    }
    </style>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <body>
    <div id="app">
    <div class="box">
    <img src="../QQxiu/pic/21.gif" alt="" class="img" v-ball>
    <img src="../QQxiu/pic/31.gif" alt="" class="img" v-ball>
    <img src="../QQxiu/pic/2132.gif" alt="" class="img" v-ball>
    <img src="../QQxiu/pic/21214.gif" alt="" class="img" v-ball>
    <img src="../QQxiu/pic/24.gif" alt="" class="img" v-ball>
    <img src="../QQxiu/pic/3214.gif" alt="" class="img" v-ball>
    </div>
    </div>
    <script>
    Vue.directive('ball',{
    inserted:function(el){
    var i=0;
    el.onclick=function(e){
    i+=10;
       el.style.transform="rotateZ("+i+"deg)"
    };
    el.onmousedown=function(e){
    var l=e.clientX-el.offsetLeft;
    var t=e.clientY-el.offsetTop;
    document.onmousemove=function(e){
    el.style.left=(e.clientX-l)+'px';
    el.style.top=(e.clientY-t)+'px'
    };
    el.onmouseup=function(){
    document.onmousemove=null;
    el.onmouseup=null;
    }
    }
    }
    });
    var app=new Vue({
    el:'#app'
    })
    </script>
    </body>
bind:update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <style>
    #text{
    width: 100px;
    height:100px;
    resize: none;
    }
    </style>
    <body>
    <div id="app">
    <textarea  id="text" v-model="a" v-box></textarea>
    </div>
    <script>
    Vue.directive('box',{
    update:function(el){
    let color1=Math.ceil(Math.random()*225);
    let color2=Math.ceil(Math.random()*225);
    let color3=Math.ceil(Math.random()*225);
    el.style.backgroundColor='rgb('+color1+","+color2+','+color3+")"
    }
    });
    var app=new Vue({
    el:'#app',
    data:{
    a:""
    }
    })
    </script>
    </body>
    </html>
小例子如下，当被绑定的textarea的内容发生变化的时候，就会执行钩子函数

componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。

unbind: 只调用一次， 指令与元素解绑时调用。

6.Vue.filter(id,[definition])注册或获取全局过滤器，主要用于在实例里面的数据不改变的情况下，在页面对渲染进dom的数据进行过滤处理，和angular中的过滤器用法一样
    
    // 注册
    Vue.filter('my-filter', function (value) {
    // 返回处理后的值
    })
    // getter，返回已注册的过滤器
    var myFilter = Vue.filter('my-filter')
    
    简单全局过滤器和局部过滤器例子
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <body>
    <div id="app">
    <h3>数字变美元</h3>
    <input type="text" placeholder="数字变美元" v-model="num">
    <span>{{num|money}}</span>
    <h3>内容反转</h3>
    <input type="text" placeholder="内容反转" v-model="message">
    <span>{{message|reverse}}</span>
    </div>
    <script>
    Vue.filter("money",
       function(value){
       return "$"+value
    });
    var app=new Vue({
    el:"#app",
    data:{
    num:100,
    message:""
    },
    filters:{
    reverse:function(value){
    return value.split('').reverse().join('')
    }
    }
    })
    </script>
    </body>
    </html>
过滤器可以管道式连接过滤
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <body>
    <div id="app">
    <h3>过滤字符串中的数字，并将剩余部分以数组形式输出</h3>
    <input type="text" placeholder="输入字符串" v-model="message">
    <span>{{message|delNum|arr}}</span>
    </div>
    <script>
    Vue.filter("delNum",
       function(value){
       return value.replace(/[0-9]/g,'')
    });
    Vue.filter("arr",
    function(value){
       return  value.split('')
    }
    );
    var app=new Vue({
    el:"#app",
    data:{
    message:""
    }
    })
    </script>
    </body>
    </html>
7.Vue.component()在组件那一篇文章有说到，不做总结了

8.Vue.version用于获取当前Vue的版本号

9.Vue.use用于安装Vue插件

10.对于Vue.mixin的理解，引用别人的博文

vue中mixin的一点理解

vue中提供了一种混合机制--mixins，用来更高效的实现组件内容的复用。最开始我一度认为这个和组件好像没啥区别。。后来发现错了。下面我们来看看mixins和普通情况下引入组件有什么区别？

 组件在引用之后相当于在父组件内开辟了一块单独的空间，来根据父组件props过来的值进行相应的操作，单本质上两者还是泾渭分明，相对独立。
 而mixins则是在引入组件之后，则是将组件内部的内容如data等方法、method等属性与父组件相应内容进行合并。相当于在引入后，父组件的各种属性方法都被扩充了。
 单纯组件引用：  

      父组件 + 子组件 >>> 父组件 + 子组件  

 mixins：  

      父组件 + 子组件 >>> new父组件 
 

 值得注意的是，在使用mixins时，父组件和子组件同时拥有着子组件内的各种属性方法，但这并不意味着他们同时共享、同时处理这些变量，两者之间除了合并，是不会进行任何通信的。最开始看到mixins的时候，天真的我似乎看到了一种向下的类似vuex的数据共享方案，心情十分激动啊。但是仔细一研究官方api和一些技术博客，才发现自己。。。天真。
我个人的拙见如下：
1.Vue在实例化成对象的那一刻，会通过mixin混合机制将方法直接添加到实例里面去
2.prototype方法直接将方法添加到Vue本身的构造器里面去
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="lib/Vue/vue.development.js"></script>
    </head>
    <body>
    <div id="app"></div>
    <div id="app1"></div>
    <script>
    Vue.mixin({
    created:function(){
    this.hello()
    },
    methods:{
    hello:function(){
    console.log('这是混合器添加的hello方法')
    },
    say:function(){
    console.log('这是混合器添加的say方法')
    }
    }
    });
    Vue.prototype.myapp=function(){
    console.log("我是外来入侵者")
    };
    var app=new Vue({
    el:"#app",
    methods:{
    lsit:function(){
    console.log('这是app实例本身的list方法')
    },
    say:function(){
    console.log('这是app实例本身的say方法')
    }
    }
    
    });
    var app1=new Vue({
    el:"#app1",
    });
    app.hello();
    app.lsit();
    app.say();
    app1.hello();
    app1.say();
    app.myapp();
    console.log(app.__proto__)
    
    </script>
    </body>
    </html>
输出结果：

大家可以看到

第一个输出的是混合器的hello方法，此刻刚开始创建实例app

第二个属于混合器的hello方法，因为app本身实例没有这个方法，所以是混合器为其添加的

第三个输出的是混合器的hello方法，此刻刚开始创建实例app1

第四个输出的是app本身的list方法

第五个输出的是app实例的say方法。因为app实例中用有该方法，会将混合器添加的say方法覆盖掉

对于六和七由于app1没有自己的hello和say方法，所以只能用混合器为他添加的方法

第八个属于Vue原型里面我们添加进去的myapp方法

我们再看一下Vue原型对象app.__proto__

我们发现里面并没有混合方法，所以混合方法在创建实例对象的那一刻添加到实例对象里面了，但是里面却有myapp方法

11.Vue.compile()在 render 函数中编译模板字符串。只在独立构建时有效
