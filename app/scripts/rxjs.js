// class Producer {
//   constructor() {
//     this.listeners = [];
//   }
//
//   addListener(listener) {
//     if (typeof listener === 'function') {
//       this.listeners.push(listener);
//     } else {
//       throw new Error('listener 必須是 function');
//     }
//   }
//
//   removeListener(listener) {
//     this.listeners.splice(this.listeners.indexOf(listener), 1);
//   }
//
//   notify(message) {
//     this.listeners.forEach(listener => {
//       listener(message);
//     });
//   }
// }
//
//
// var egghead = new Producer();
//
// // new 出一個 Producer 實例叫 egghead
//
// function listener1(message) {
//   console.log(message + 'from listener1');
// }
//
// function listener2(message) {
//   console.log(message + 'from listener2');
// }
//
// egghead.addListener(listener1); // 註冊監聽
// egghead.addListener(listener2);
//
// egghead.notify('A new course!!'); // 當某件事情方法時，執行
//
//
// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();
//
//
// function log(target, name, descriptor) {
//   var oldValue = descriptor.value;
//
//   descriptor.value = function () {
//     console.log(`Calling ${name} with`, arguments);
//     return oldValue.apply(this, arguments);
//   };
//
//   return descriptor;
// }
//
// let arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
// let source = Rx.Observable.from(arr);
//
// source.subscribe((name) => {
//   console.log(typeof name);
// });
//
// var source = Rx.Observable.from('Max');
// source.subscribe(i => {
//   console.log(i);
// });

// var source = Rx.Observable
//   .from(new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello RxJS!');
//     }, 3000);
//   }));
//
//
// source.subscribe((val) => {
//   console.log(val);
// }, (error) => {
//   console.log(error);
// });

// var source = Rx.Observable.throw('Oop!');
// source.subscribe((val) => {
//
// }, (error) => {
//   console.log(error);
// });

// let source = Rx.Observable.interval(1000);
//
// source.subscribe((val) => {
//   console.log(val);
// });

// let source = Rx.Observable.interval(1000);
// let newest = source.map(x => Math.pow(x, 3));
// newest.subscribe(val => {
//   console.log(val);
// });
//
