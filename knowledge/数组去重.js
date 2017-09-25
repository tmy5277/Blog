//两个循环，简单粗暴
var ary=[1,2,3,3,2,3,4,5];
for(var i=0;i<ary.length;i++){
    for(var j=i+1;j<ary.length;j++){
        if(ary[i]===ary[j]){
            ary.splice(i,1);
            i--;
        }
    }
}
alert(ary)；

//变成对象，类名和值相同，删类名，即删掉这个对象。
var a=[9,2,33,66,55,56,34,1,91,88];
for(var i=0;i<a.length;i++){
    for(var j = i + 1;j<a.length;j++){
        if(a[i]>a[j]){
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
    }
}
console.warn(a)


//indexOf
var ary=[1,2,3,3,2,3,4,5];
var ary1=[];
for(var i=0;i<ary.length;i++){
    if(ary1.indexOf(ary[i])==-1){
        ary1.push(ary[i]);
    }
}
alert(ary1)