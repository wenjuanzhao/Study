//得到Observable的构造函数
const Observable=Rx.Observable;
//定义observable对象  使用静态方法
/*const observable=Observable.create(function (observe) {
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
})*/
//创建类操作符的使用
/*静态类的操作符of的使用 根据有限的数据产生同步的数据流*/
/*const source$=Observable.of(1,2,3);
source$.subscribe(function (item) {
    console.log(item)
})*/
/*
静态类操作符range的使用，产生一定范围内的同步数据流*/
/*
const source$=Observable.range(1,100);
source$.subscribe(function (item) {
     console.log(item)
})*/
/*
静态操作符generate的使用，  循环产生一系列数据流*/
/*
const source$=Observable.generate(
    2  //初始值相当于 for中的i
    ,function (item) {
    return item<10;  //继续的条件，相当于for中的判断
},function (item) {
    return item+2;  //每次递增的值
},function (item) {
    return item*item;  //产生的结果
})
source$.subscribe(function (item) {
    console.log(item)
})*/
/*
实例操作符repeat的使用*/
/*
const source$=Observable.range(1,3);
const repeated$=source$.repeat(10);
repeated$.subscribe(function (item) {
    console.log(item)
})*/
/*
产生异步数据流的 interval*/
/*
const source$=Observable.interval(1000);
const repeated=source$.map(function (item) {
    return item+1;
})
repeated.subscribe(function (item) {
    console.log(item)
})*/
/*
产生异步数据流的timer  实现的效果一秒之后输出0*/
/*
const source$=Observable.timer(1000);
source$.subscribe(function (item) {
    console.log(item)
})*/
/*
接收promise对象转化为数据流*/
/*
const promise=Promise.reject("bad");
const source$=Observable.fromPromise(promise);
source$.subscribe(function (item) {
    console.log(item);
},function (error) {
     console.log("catcah"+error);
},function () {
     console.log("complete")
})*/
/*
formEvent  将网页上的事件转化为数据流，该方法接收两个参数
1、监听的元素
2、监听的事件*/
/*
let clickNum=0;
const source$=Observable.fromEvent(document.querySelector("#clickme"),"click");
source$.subscribe(function () {
    document.querySelector("#text").innerText=clickNum++;
})*/
//数据流合并
/*
 concat首尾合并
const source1$=Observable.of([1,3,5]);
const source2$=Observable.of([2,4,6]);
//const complete=Observable.concat(source1$,source2$);
const complete=source1$.concat(source2$);
complete.subscribe(function (item) {
    console.log(item)
})
*/
/*merge先到先得快速通过  */
/*
const source1$=Observable.timer(0,1000).map(function (item) {
     return item+"A";
})
const source2$=Observable.timer(500,1000).map(function (item) {
    return item+"B"
})
const res=Observable.merge(source1$,source2$);
res.subscribe(function (item) {
    console.log(item)
},function (error) {
    console.log(error)
},function () {
    console.log("complete")
})*/
//zip拉链式合并 一对一的合并
/*
const source1$=Observable.of('1','2','3');
const source2$=Observable.of('a','b','c');
const res$=Observable.zip(source1$,source2$);
res$.subscribe(console.log,null,function () {
    console.log("complete")
})
*/
//combineLatest 合并每个Observable中的最后一个数形新的数据流
/*
const source1$=Observable.timer(500,1000);
const source2$=Observable.timer(1000,1000);
const res$=Observable.combineLatest(source1$,source2$);
res$.subscribe(function (item) {
     console.log(item)
},function (error) {
    console.log(error)
},function () {
    console.log("complete")
})*/
const source1$=Observable.of('a','b','c');
const source2$=Observable.of(1,2,3);
const res$=source1$.combineLatest(source2$);
res$.subscribe(function (item) {
    console.log(item)
},null,function () {
    console.log("complete")
})