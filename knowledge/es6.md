ECMAScript 6 Ŀǰ������Ϊҵ���׼�������ռ��ٶȱ� ES5 Ҫ��ܶ࣬��Ҫԭ�����ִ�������� ES6 ��֧���൱Ѹ�٣������� Chrome �� Firefox ��������Ѿ�֧�� ES6 �о�����������ԡ�


1. let��const �� block ������
let �������鼶������ES6 �Ƽ��ں�����ʹ�� let ������������� var��
var a = 2;
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 2
ͬ���ڿ鼶��������Ч����һ������������ʽ�� const������������һ��������ES6 �У�const �����ĳ���������ָ�룬��ָ��ĳ�����ã�Ҳ����˵���������������һ�ɲ���ģ��磺
{
  const ARR = [5,6];
  ARR.push(7);
  console.log(ARR); // [5,6,7]
  ARR = 10; // TypeError
}
�м�������Ҫע�⣺
let �ؼ��������ı������߱�����������hoisting������
let �� const ����ֻ�������һ�����У��������ڣ���Ч
��ʹ�ó��� const ����ʱ����ʹ�ô�д�������磺CAPITAL_CASING
const ������ʱ���뱻��ֵ
2. ��ͷ������Arrow Functions��
ES6 �У���ͷ�������Ǻ�����һ�ּ�д��ʽ��ʹ�����Ű�������������һ�� =>���������Ǻ����壺
var getPrice = function() {
  return 4.55;
};
 
// Implementation with Arrow Function
var getPrice = () => 4.55;
��Ҫע����ǣ����������е� getPrice ��ͷ���������˼�ຯ���壬������Ҫ reture ��䣬�����������ʹ�õ������������壺
let arr = ['apple', 'banana', 'orange'];
 
let breakfast = arr.map(fruit => {
  return fruit + 's';
});
 
console.log(breakfast); // apples bananas oranges
��Ȼ����ͷ�������������ô����ü�࣬������ this ���ǰ�����ָ���������������Կ������漸�����ӣ�
function Person() {
  this.age = 0;
 
  setInterval(function growUp() {
    // �ڷ��ϸ�ģʽ�£�growUp() ������ this ָ�� window ����
    this.age++;
  }, 1000);
}
var person = new Person();
���Ǿ�����Ҫʹ��һ������������ this��Ȼ���� growUp ���������ã�
function Person() {
  var self = this;
  self.age = 0;
 
  setInterval(function growUp() {
    self.age++;
  }, 1000);
}
��ʹ�ü�ͷ��������ʡȴ����鷳��
function Person(){
  this.age = 0;
 
  setInterval(() => {
    // |this| ָ�� person ����
    this.age++;
  }, 1000);
}
 
var person = new Person();
3. ��������Ĭ��ֵ
ES6 ��������Ժ�����������Ĭ��ֵ��
let getFinalPrice = (price, tax=0.7) => price + price * tax;
getFinalPrice(500); // 850
4. Spread / Rest ������
Spread / Rest ������ָ���� ...�������� Spread ���� Rest ��Ҫ���������ﾳ��
�������ڵ�������ʱ������һ�� Spread ��������
function foo(x,y,z) {
  console.log(x,y,z);
}
 
let arr = [1,2,3];
foo(...arr); // 1 2 3
�������ں�������ʱ����һ�� Rest ��������
function foo(...args) {
  console.log(args);
}
foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
5. ����ʷ���չ
ES6 ���������ڶ���������ʱʹ�ü�д�﷨������ʼ�����Ա����ͺ����Ķ��巽�������������ڶ��������н��м��������
function getCar(make, model, value) {
  return {
    // ��д����
    make,  // ��ͬ�� make: make
    model, // ��ͬ�� model: model
    value, // ��ͬ�� value: value
 
    // ���Կ���ʹ�ñ��ʽ����ֵ
    ['make' + make]: true,
 
    // ���� `function` �ؼ��ʼ�д������
    depreciate() {
      this.value -= 2500;
    }
  };
}
 
let car = getCar('Barret', 'Lee', 40000);
 
// output: {
//     make: 'Barret',
//     model:'Lee',
//     value: 40000,
//     makeKia: true,
//     depreciate: function()
// }
6. �����ƺͰ˽���������
ES6 ֧�ֶ����ƺͰ˽��Ƶ���������ͨ��������ǰ����� 0o ����0O ���ɽ���ת��Ϊ������ֵ��
let oValue = 0o10;
console.log(oValue); // 8
 
let bValue = 0b10; // ������ʹ�� `0b` ���� `0B`
console.log(bValue); // 2
7. ���������⹹
�⹹���Ա����ڶ���ֵʱ�����м������
function foo() {
  return [1,2,3];
}
let arr = foo(); // [1,2,3]
 
let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3
 
function bar() {
  return {
    x: 4,
    y: 5,
    z: 6
  };
}
let {x: x, y: y, z: z} = bar();
console.log(x, y, z); // 4 5 6
8. ������
ES6 �����ڶ�����ʹ�� super ������
var parent = {
  foo() {
    console.log("Hello from the Parent");
  }
}
 
var child = {
  foo() {
    super.foo();
    console.log("Hello from the Child");
  }
}
 
Object.setPrototypeOf(child, parent);
child.foo(); // Hello from the Parent
             // Hello from the Child
9. ģ���﷨�ͷָ���
ES6 ����һ��ʮ�ּ��ķ�����װһ���ַ����ͱ�����
${ ... } ������Ⱦһ������
` ��Ϊ�ָ���
let user = 'Barret';
console.log(`Hi ${user}!`); // Hi Barret!
10. for...of VS for...in
for...of ���ڱ���һ���������������飺
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
  console.log(nickname);
}
// ���: di, boo, punkeye
for...in �������������е����ԣ�
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname in nicknames) {
  console.log(nickname);
}
Result: 0, 1, 2, size
11. Map �� WeakMap
ES6 �������µ����ݽṹ����Map �� WeakMap����ʵ��ÿ�����󶼿��Կ�����һ�� Map��
һ�������ɶ�� key-val �Թ��ɣ��� Map �У��κ����Ͷ�������Ϊ����� key���磺
var myMap = new Map();
 
var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};
 
// ����ֵ
myMap.set(keyString, "value �� 'a string' ����");
myMap.set(keyObj, "value �� keyObj ����");
myMap.set(keyFunc, "value �� keyFunc ����");
 
myMap.size; // 3
 
// ��ȡֵ
myMap.get(keyString);    // "value �� 'a string' ����"
myMap.get(keyObj);       // "value �� keyObj ����"
myMap.get(keyFunc);      // "value �� keyFunc ����"
WeakMap
WeakMap ����һ�� Map��ֻ������������ key ���������ã���˼���� WeakMap �еĶ�����������ʱ�����ǣ�ʹ�������õ����ڴ�й©���⡣
��һ����Ҫע��ĵ��ǣ�WeakMap ������ key �����Ƕ�����ֻ���ĸ����� delete(key),has(key),get(key) ��set(key, val)��
let w = new WeakMap();
w.set('a', 'b'); 
// Uncaught TypeError: Invalid value used as weak map key
 
var o1 = {},
    o2 = function(){},
    o3 = window;
 
w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);
 
w.get(o3); // undefined, because that is the set value
 
w.has(o1); // true
w.delete(o1);
w.has(o1); // false
12. Set �� WeakSet
Set ������һ�鲻�ظ���ֵ���ظ���ֵ�������ԣ�ֵ���Ϳ�����ԭʼ���ͺ��������ͣ�
let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('strings');
mySet.add({ a: 1, b:2 });
����ͨ�� forEach �� for...of ������ Set ����
mySet.forEach((item) => {
  console.log(item);
    // 1
    // 2
    // 3
    // 'strings'
    // Object { a: 1, b: 2 }
});
 
for (let value of mySet) {
  console.log(value);
    // 1
    // 2
    // 3
    // 'strings'
    // Object { a: 1, b: 2 }
}
Set ͬ���� delete() �� clear() ������
WeakSet
������ WeakMap��WeakSet �������������һ�������б������������ã��� WeakSet �еĶ���ֻ�������һ�Σ�
var ws = new WeakSet();
var obj = {};
var foo = {};
 
ws.add(window);
ws.add(obj);
 
ws.has(window); // true
ws.has(foo);    // false, foo û����ӳɹ�
 
ws.delete(window); // �ӽ����ɾ�� window ����
ws.has(window);    // false, window �����Ѿ���ɾ��
13. ��
ES6 ���� class �﷨��ֵ��ע���ǣ������ class �����µĶ���̳�ģ�ͣ���ֻ��ԭ�������﷨�Ǳ�����ʽ��
������ʹ�� static �ؼ��ʶ��幹�캯���ĵķ��������ԣ�
class Task {
  constructor() {
    console.log("task instantiated!");
  }
 
  showId() {
    console.log(23);
  }
 
  static loadAll() {
    console.log("Loading all tasks..");
  }
}
 
console.log(typeof Task); // function
let task = new Task(); // "task instantiated!"
task.showId(); // 23
Task.loadAll(); // "Loading all tasks.."
���еļ̳кͳ�����
class Car {
  constructor() {
    console.log("Creating a new car");
  }
}
 
class Porsche extends Car {
  constructor() {
    super();
    console.log("Creating Porsche");
  }
}
 
let c = new Porsche();
// Creating a new car
// Creating Porsche
extends ����һ������̳и��࣬��Ҫע����ǣ������constructor ��������Ҫִ�� super() ������
��Ȼ����Ҳ���������෽���е��ø���ķ�������super.parentMethodName()��
�� ���� �Ķ����������Ľ��ܡ�
�м���ֵ��ע����ǣ�
�����������������hoisting)�������Ҫʹ��ĳ�� Class�����������ʹ��֮ǰ��������������׳�һ�� ReferenceError �Ĵ���
�����ж��庯������Ҫʹ�� function �ؼ���
14. Symbol
Symbol ��һ���µ��������ͣ�����ֵ��Ψһ�ģ����ɱ�ġ�ES6 ����� symbol ��Ŀ����Ϊ������һ��Ψһ�ı�ʶ������������ʲ��������ʶ����
var sym = Symbol( "some optional description" );
console.log(typeof sym); // symbol
ע�⣬���� Symbol ǰ�治��ʹ�� new ��������
�����������һ����������ԣ���ô������Ի��ǲ���ö�ٵģ�
var o = {
    val: 10,
    [ Symbol("random") ]: "I'm a symbol",
};
 
console.log(Object.getOwnPropertyNames(o)); // val
���Ҫ��ȡ���� symbol ���ԣ���Ҫʹ��Object.getOwnPropertySymbols(o)��
15. ��������Iterators��
����������ÿ�η������ݼ��ϵ�һ��Ԫ�أ���ָ��ָ�����ݼ������һ��Ԫ���ǣ�����������˳������ṩ�� next() ����������һ�����У������������һ������ done �� value ���ԵĶ���
ES6 �п���ͨ�� Symbol.iterator ����������Ĭ�ϵı�����������ʲôʱ�������Ҫ��������ִ������ @@iterator ��������Է���һ�����ڻ�ȡֵ�ĵ�������
����Ĭ�Ͼ���һ����������
var arr = [11,12,13];
var itr = arr[Symbol.iterator]();
 
itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }
 
itr.next(); // { value: undefined, done: true }
�����ͨ�� [Symbol.iterator]() �Զ���һ������ĵ�������
16. Generators
Generator ������ ES6 �������ԣ�������һ���������صĿɱ����������ɶ��ֵ��
��ʹ������ῴ�� * �﷨��һ���µĹؼ��� yield:
function *infiniteNumbers() {
  var n = 1;
  while (true){
    yield n++;
  }
}
 
var numbers = infiniteNumbers(); // returns an iterable object
 
numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }
ÿ��ִ�� yield ʱ�����ص�ֵ��Ϊ����������һ��ֵ��
17. Promises
ES6 �� Promise ����ԭ����֧�֣�һ�� Promise ��һ���ȴ����첽ִ�еĶ��󣬵���ִ����ɺ���״̬���� resolved ����rejected��
var p = new Promise(function(resolve, reject) {  
  if (/* condition */) {
    // fulfilled successfully
    resolve(/* value */);  
  } else {
    // error, rejected
    reject(/* reason */);  
  }
});
ÿһ�� Promise ����һ�� .then �����������������������������һ���Ǵ��� resolved ״̬�Ļص���һ���Ǵ��� rejected ״̬�Ļص���
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));


ԭ�ģ�https://github.com/metagrover/ES6-for-humans