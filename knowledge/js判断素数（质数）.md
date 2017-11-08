## 判断是否是素数（质数）  
  
    /*判断一个数字是否是质数：
    质数（prime number）又称素数，有无限个。除了1和它本身以外不再被其他的除数整除。*/
    function isPrime(number){
    //判断输入是否为number类型，是否为整数
      if (typeof number!=='number'||!Number.isInteger(number))
     {
     return false;
     };
    //小于2都不是素数
      if (number<2) {return false};
    //2是素数，被2整除的都不是素数
       if (number===2) {
       return true
       }else if(number%2===0){
       return false;
       };
    //依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot=Math.sqrt(number);
     for(var i=3;i<=squareRoot;i+=2){
      if (number%i===0) {
    return false;
       };
      }
      return true;
    }
    alert(isPrime(47));