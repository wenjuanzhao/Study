
var Observable=Rx.Observable;
//这个函数会被用作构造发布者对象的参数，决定了发布者的行为
const onSubscribe=function (observer) {
    let number=1;
    let handler=setInterval(function () {
        observer.next(number);
        number++;
    },1000)
    //在定义Observable的过程中返回的是一个包含unsubscribe的函数
    return {
        unsubscribe:function () {
            clearInterval(handler)
        }
    }
}
//发布者
const source$ = new Observable(onSubscribe);
const sub=source$.subscribe(function (item) {
    console.log(item)
},function (error) {
    console.log(error)
},function () {
    console.log("结束了所有数据的接受")
});
setTimeout(function () {
    sub.unsubscribe();
},3500)