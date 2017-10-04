##vueJS实现星级评分  
---  
  
主要原理是动态改变样式  
  
<pre><code>
<style>
  .star{
    font-size: 0;
  }
  .star-item{
    display: inline-block;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 100%;
  }
  .star-item.on{
    background-image: url(img/on.png);
  }
  .star-item.half{
    background-image: url(img/half.png);
  }
  .star-item.off{
    background-image: url(img/off.png);
  }
</style>



<div id="app">
  <ul class="star">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" track-by="index"></span>
  </ul>
</div>



<script>
  new Vue({
    el: '#app',
  　data:{
    score: 4
  },
   computed:{ //计算属性
    itemClasses(){
      let result = [];
      let score = Math.floor(this.score * 2 ) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for(let i=0;i<integer;i++){
        result.push("on");
      }
      if(hasDecimal){
        result.push("half");
      }
      while(result.length < 5){
        result.push("off");
      }
      return result;
    }
  }
})
</script>
 </code></pre>  
