ES5的对象原型有两个新的属性__defineGetter__和__defineSetter__，专门用来给对象绑定get和set。可以这样书写：


    var Coder = function() {
    }
    Coder.prototype.__defineGetter__('name', function() {
        if (this.name) {
            return this.name
        }else{
            return '你还没有取名'
        }
    })
    Coder.prototype.__defineSetter__('name', function(val) {
        this.name = val
    })