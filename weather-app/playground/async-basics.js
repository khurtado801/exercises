// Runs synchronous
console.log('Starting app');
/* 
  SetTimeOut (non-blocking IO)runs asynchronous and takes two arguments:
  The first is a function, a call-back function which will get fired after
  a set amount of time. The second is argument is the number of milliseconds 
  to wait until firing the call-back function. 1000 milliseconds equals 1 second
*/
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);
// Runs asynchronous
setTimeout(() => {
  console.log('Second setTimeout');
}, 0);
// Runs synchronous
console.log('Finishing up');
