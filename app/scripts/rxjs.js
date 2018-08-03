// let source = Rx.Observable.fromEvent(document.body, 'click');
//
// // let example = source
// //   .map(e => {
// //     console.log(e);
// //     return Rx.Observable.interval(1000).take(3);
// //   })
// //   .concatAll();
//
// let example = source
//   .concatMap(e => Rx.Observable.interval(1000).take(3));
//
// example.subscribe((val) => {
//   console.log(val);
// });

// var source = Rx.Observable.fromEvent(document.body, 'click');
//
// var example = source
//   .map(e => Rx.Observable.interval(1000).take(3))
//   .switch();
//
// example.subscribe((val) => {
//   console.log(val);
// });

var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source
  .map(e => Rx.Observable.interval(1000).take(3))
  .mergeAll();

example.subscribe(val => {
  console.log(val);
});
