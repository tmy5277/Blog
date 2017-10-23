    //方法1
    var a= (new Date()).toLocaleDateString();//获取当前日期
    a = a.replace(/\//g,'-');//替换2017/05/03 为    2017-05-03
    //console.log(a);
    //console.log(new Date());

    //方法2
    //var oldTime = Math.round(new Date().getTime())-86400000;
    var oldTime = Math.round(new Date().getTime());
    var d = new Date(oldTime);
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    function formatDate(now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //return year+"-"+add0(month)+"-"+add0(date)+" "+add0(hour)+":"+add0(minute)+":"+add0(second);
        return year + "-" + add0(month) + "-" + add0(date);
    }
    var preTime = formatDate(new Date());
    //var preTime = formatDate(d);
    //console.log(preTime);