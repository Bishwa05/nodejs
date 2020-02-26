/**
 * The primary use of nextTick in a function is to postpone the broadcast of result events to listeners on the current execution stack until the caller has had an opportunity to register event listeners—to give the currently executing program
a chance to bind callbacks to EventEmitter.emit events. It may be thought of as a pattern used wherever asynchronous behavior should be emulated.
 */

var events = require('events');
 function getEmitter() {
     var emitter = new events.EventEmitter(); process.nextTick(function() {
    emitter.emit('start'); });
        return emitter;
    }
    var myEmitter = getEmitter(); 
    myEmitter.on('start', function() {
    console.log('Started'); 
})