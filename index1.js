//得到Observable的构造函数
const Observable=Rx.Observable;
//定义observable对象  使用静态方法
const observable=Observable.create(function (observe) {
    let num=1;
    setInterval(function () {
        if(num>3){
            observe.error();
        }
        observe.next(num)
        num++;
    },1000)
});
observable.map(function (item) {
    return item*item;
}).subscribe(function (item) {
    console.log(item)
})
