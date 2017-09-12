<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :class="{finished : item.isFinished}" @click="toggleFinish(item)">
      {{item.label}}
      </li>
    </ul>
    <p>child tells me : {{childWords}}</p>
    <component-a msgfromfather='you die!' @child-tell-me-something='listenToMyBoy'></component-a>
  </div>
</template>

<script>
import Store from './store.js'
import ComponentA from './components/componentA.vue'

export default {
  data:function() {
    return {
      title: 'this is a todo list',
      items: Store.fetch(),
      newItem:'',
      childWords:''
    }
  },

  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep: true
    }
  },

  methods:{
    toggleFinish: function(item){
      item.isFinished = !item.isFinished;
    },
    addNew: function()
    {
      this.items.push({
        label:this.newItem,
        isFinished:false
      })
      this.newItem=''

    },
    listenToMyBoy(msg){
      this.childWords = msg;
    }
  },

  components:{
    ComponentA
  },

  events:{
    'child-tell-me-something':function(msg)
    {
       this.childWords = msg;
    }
  }
}
</script>

<style>
.finished
{
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>