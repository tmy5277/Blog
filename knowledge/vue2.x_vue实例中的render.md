##render: h => h(App)


  
这是Vue 2.0新增的函数，可以直接给绑定节点渲染一个vue组件，如果在Vue 1.x下，就应该使用

    new Vue({
    el: '#app',
    components: { App }
    });  
  

然后在页面中写入标记：

    <div id="app">
    <app></app>
    </div>


----------
**简单明了的说，就是vue 1.x是上面的写法，而vue 2.x就是标题那样的写法。**