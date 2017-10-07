##VUE render


**非使用render方法的情况**

完整代码：
    
    <!DOCTYPE html>
    <html>
    <head>
    <title>Vue的render方法说明</title>
    <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
    </head>
    <body>
    <div id="app">
    <child :level="1">Hello world!</child>
    </div>
    <script type="text/x-template" id="template">
    <div>
    <h1 v-if="level === 1">
    <slot></slot>
    </h1>
    <h2 v-if="level === 2">
    <slot></slot>
    </h2>
    <h3 v-if="level === 3">
    <slot></slot>
    </h3>
    <h4 v-if="level === 4">
    <slot></slot>
    </h4>
    <h5 v-if="level === 5">
    <slot></slot>
    </h5>
    <h6 v-if="level === 6">
    <slot></slot>
    </h6>
    </div>
    </script>
     
    <script type="text/javascript">
    Vue.component('child', {
    template: '#template',
    props: {
    level: {
    type: Number,
    required: true
    }
    }
    })
    new Vue({
    el: "#app"
    })
    </script>
    </body>
    </html>
 

代码说明：  
1. 最下面的new Vue方法很明显，是new了一个Vue的实例，挂载点是”#app”这个dom  
  
2. Vue.component这部分代码，第一个参数表示注册了一个Vue的组件，标签名是`child`（即 `child` 标签会被替换）；  
  
3. 第二个参数中，template属性表示取找id=“template”的标签（另注，这个标签是`script`，或者是`div`，或者是`template`，或者是其他，没有影响），然后将这个标签作为组件的模板  
  
4. props表示传递给这个组件的变量，通过标签中的v-bind:level这种形式传递变量level的值等于1。在这里的写法是限制变量类型为number，并且强制需要  
  
5. slot表示内容分发，具体来说，就是把组件替换的源`html`标签里的内容（如 `child` 标签里面的内容，不包含 `child`标签本身，这里是Hello world!），发在 `slot` 标签所在的位置（即放在  `h1~h2` 这样的标签内）。
    
6. 如果还不理解，可以运行该段代码查看结果，或者去看vue的官方文档说明  
  
7. 总的来说，顺序如下：注册一个组件，这个组件有模板，这个模板里有一个变量，变量的值通过父组件来传递，然后根据变量的值，通过v-if命令显示对应的html标签内容，然后在父组件里使用这个组件，让子组件显示需要显示的内容。  

----------



这样的代码有一个缺陷，就是需要写大量重复的代码，如从 `h1 ～ h6` 共6种情况。  
如果这样的模板比较复杂，比如 `hx `标签里还有很多其他内容，显然会让人十分困扰，既不美观也不好用。

**使用render方法的情况**

解决办法就是render方法，全部代码如下：

     
    <!DOCTYPE html>
    <html>
    <head>
    <title>Vue的render方法说明</title>
    <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
    </head>
    <body>
    <div id="app">
    <child v-bind:level="2">Hello world!</child>
    </div>
    <script type="text/javascript">
    Vue.component('child', {
    render: function (createElement) {
    return createElement(
    'h' + this.level, // tag name 标签名称
    this.$slots.default // 子组件中的阵列
    )
    },
    props: {
    level: {
    type: Number,
    required: true
    }
    }
    })
    new Vue({
    el: "#app"
    })
    </script>
    </body>
    </html>
     

代码说明：

1、这里的代码和上面区别之处有两点：

其一，没有显式的模板内容，而是通过render方法生成；   
其二，使用了createElement方法

2、关于createElement方法，他是通过render函数的参数传递进来的，这个方法有三个参数，

第一个参数主要用于提供dom的html内容，类型可以是字符串、对象或函数。比如”div”就是创建一个` div`标签

第二个参数（类型是对象）主要用于设置这个dom的一些样式、属性、传的组件的参数、绑定事件之类，具体可以参考 官方文档 里这一小节的说明

第三个参数（类型是数组，数组元素类型是VNode）主要用于说是该结点下有其他结点的话，就放在这里。

比如说，有需要分发的标签 `slot`，则通过 `this.$slots.default` 来获得，或许还有其他组件之类，可能需要被使用的，应该也是放在这里。  

--  

**个人初步理解是**，在原本被替换的地方，例如例上面代码中的 `<child>` 标签，在其下的每个次一级标签为一个元素，放在 `this.$slots.default`这个数组中，例如上面的话，这个数组只有一个元素，但是以下代码：

    <child v-bind:level="2"><div>Hello</div><div> world!</div></child>


这个数组中则有两个元素，分别是 `<div>Hello</div>` 和 `<div> world!</div>`，  
例如 `this.$slots.default[0]` 则表示第一个标签。

另外，假如这2个元素中间有空格、换行符之类，那么数组中则有三个元素，那个空格、换行符则为第二个元素。这个属性有点类似dom的 childNodes属性，不是单纯以标签才算作子节点的。（但注意，不是完全相同）

有时候，我们可能想在里面添加其他的组件，例如将abc组件注册在里面。那么，我们首先要注册这个abc组件，然后将abc组件在数组里通过createElement来创建标签，只有通过这样的方式创建的abc标签，才能被abc组件使用。单纯输入字符串` <abc></abc>` 这样是不可以的。

如以下代码是可行的：（在通过render方法生成的模板中添加别的组件）
    
    
    <!DOCTYPE html>
    <html>
    <head>
    <title>Vue的render方法说明</title>
    <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
    </head>
    <body>
    <div id="app">
    <child v-bind:level="2">
    <div>Hello</div><div> world!</div>
    </child>
    </div>
    <script>
    Vue.component('abc', {
    template: "<div>abc</div>"
    })
     
    Vue.component('child', {
    render: function (createElement) {
    console.log(this.$slots)
    return createElement(
    'h' + this.level, // tag name 标签名称
    [this.$slots.default[0], createElement("abc"), this.$slots.default[1]] // 子组件中的阵列
    )
    },
    props: {
    level: {
    type: Number,
    required: true
    }
    }
    })
     
    new Vue({
    el: "#app"
    })
    </script>
    </body>
    </html>
     

显示结果是：

Hello  
 abc  
 world!  


----------

**最后**

如果想将原有内容全部使用（而不是只取部分标签），那么直接使用 `this.$slots.default` 作为第三个参数即可，他本身就是一个数组。

总而言之，createElement方法的作用就是动态的创建一个dom用于被render函数渲染，其中参数二和参数三可以选择性省略，参数二用于设置dom的样式、属性、事件等，参数三用于设置分发的内容，包括新增的其他组件。

粗略理解的话，可以理解为：createElement( 标签名, 标签属性, 标签里的内容)

这样的话，我们就有了一个组件的模板所需要的全部内容了

----------


**总结**

1、render方法的实质就是生成template模板；

2、通过调用一个方法来生成，而这个方法是通过render方法的参数传递给他的;

3、这个方法有三个参数，分别提供标签名，标签相关属性，标签内部的html内容

4、通过这三个参数，可以生活曾一个完整的模板。

**备注**

1、render方法可以使用JSX语法，但需要Babel plugin插件；

2、render方法里的第三个参数可以使用函数来生成多个组件（特别是如果他们相同的话），只要生成结果是一个数组，且数组元素都是VNode即可
