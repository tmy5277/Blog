JS自带函数  
concat  
将两个或多个字符的文本组合起来，返回一个新的字符串。  
<pre><code>
var a = "hello";
var b = ",world";
var c = a.concat(b);
alert(c);
//c = "hello,world"
</code></pre>  

indexOf  
返回字符串中一个子串第一处出现的索引（从左到右搜索）。如果没有匹配项，返回 -1 。  
<pre><code>
var index1 = a.indexOf("l");
//index1 = 2
var index2 = a.indexOf("l",3);
//index2 = 3
</code></pre>  

charAt  
返回指定位置的字符。  
<pre><code>
var get_char = a.charAt(0);
//get_char = "h"
</code></pre>  

lastIndexOf  
返回字符串中一个子串最后一处出现的索引（从右到左搜索），如果没有匹配项，返回 -1 。  
<pre><code>  
var index1 = lastIndexOf('l');
//index1 = 3
var index2 = lastIndexOf('l',2)
//index2 = 2
</code></pre>  

match   
检查一个字符串匹配一个正则表达式内容，如果么有匹配返回 null。  
<pre><code>
var re = new RegExp(/^\w+$/);
var is_alpha1 = a.match(re);
//is_alpha1 = "hello"
var is_alpha2 = b.match(re);
//is_alpha2 = null
</code></pre>  

substring  
返回字符串的一个子串，传入参数是起始位置和结束位置。  
<pre><code>
var sub_string1 = a.substring(1);
//sub_string1 = "ello"
var sub_string2 = a.substring(1,4);
//sub_string2 = "ell"
</code> </pre> 

substr  
返回字符串的一个子串，传入参数是起始位置和长度  
<pre><code>
var sub_string1 = a.substr(1);
//sub_string1 = "ello"
var sub_string2 = a.substr(1,4);
//sub_string2 = "ello"
</code></pre>

replace  
用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。  
<pre><code>
var result1 = a.replace(re,"Hello");
//result1 = "Hello"
var result2 = b.replace(re,"Hello");
//result2 = ",world"
</code></pre>

search  
执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。  
<pre><code>
var index1 = a.search(re);
//index1 = 0
var index2 = b.search(re);
//index2 = -1
</code></pre>

slice  
提取字符串的一部分，并返回一个新字符串（与 substring 相同）。  
<pre><code>
var sub_string1 = a.slice(1);
//sub_string1 = "ello"
var sub_string2 = a.slice(1,4);
//sub_string2 = "ell"
</code></pre> 

split  
通过将字符串划分成子串，将一个字符串做成一个字符串数组。  
<pre><code>
var arr1 = a.split("");
//arr1 = [h,e,l,l,o]
</code></pre>

length  
返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。  
<pre><code>
var len = a.length();
//len = 5
</code></pre>  

toLowerCase  
将整个字符串转成小写字母。  
<pre><code>
var lower_string = a.toLowerCase();
//lower_string = "hello"
</code></pre> 

toUpperCase  
将整个字符串转成大写字母。  
<pre><code>
var upper_string = a.toUpperCase();
//upper_string = "HELLO"
</code></pre>
