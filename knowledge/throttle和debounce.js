/*
* Ƶ�ʿ��� ���غ�����������ʱ��fn ִ��Ƶ���޶�Ϊÿ����ʱ��ִ��һ��
* @param fn {function}  ��Ҫ���õĺ���
* @param delay  {number}    �ӳ�ʱ�䣬��λ����
* @param immediate  {bool} �� immediate��������false �󶨵ĺ�����ִ�У�������delay���ִ�С�
* @return {function}ʵ�ʵ��ú���
*/
var throttle = function (fn,delay, immediate, debounce) {
   var curr = +new Date(),//��ǰ�¼�
       last_call = 0,
       last_exec = 0,
       timer = null,
       diff, //ʱ���
       context,//������
       args,
       exec = function () {
           last_exec = curr;
           fn.apply(context, args);
       };
   return function () {
       curr= +new Date();
       context = this,
       args = arguments,
       diff = curr - (debounce ? last_call : last_exec) - delay;
       clearTimeout(timer);
       if (debounce) {
           if (immediate) {
               timer = setTimeout(exec, delay);
           } else if (diff >= 0) {
               exec();
           }
       } else {
           if (diff >= 0) {
               exec();
           } else if (immediate) {
               timer = setTimeout(exec, -diff);
           }
       }
       last_call = curr;
   }
};
 
/*
* ���п��� ���غ�����������ʱ������ʱ�������ڻ���� delay��fn �Ż�ִ��
* @param fn {function}  Ҫ���õĺ���
* @param delay   {number}    ����ʱ��
* @param immediate  {bool} �� immediate��������false �󶨵ĺ�����ִ�У�������delay���ִ�С�
* @return {function}ʵ�ʵ��ú���
*/
 
var debounce = function (fn, delay, immediate) {
   return throttle(fn, delay, immediate, true);
};