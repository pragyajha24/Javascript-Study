'use strict';

// output question

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(function (res) {
  console.log(res);
});

console.log('Test end');


// explanation for what i think output will be
//So, the console.log will get in callstack first because executed.
// then setTimeout() is 0, it will go in web api environment and quickly in callback queue.
//then promise.resolve is for promise that always return fulfilled, this has a micro task which means it will go in microtask queue
// the last console will go in callstack and execute.
//Now, between setTimeout and promise resolve, the microtask queue has priority between callback queue to go in callstack.
//so the promise will log and then the settiemout.
//////////////Test start
////////////Test end
////////////Resolved Promise 1
///////////0 sec timer

