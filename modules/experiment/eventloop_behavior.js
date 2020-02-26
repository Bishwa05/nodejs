var fs = require('fs');
var EventEmitter = require('events').EventEmitter; var pos = 0;
var messenger = new EventEmitter();
// Listener for EventEmitter 
messenger.on("message", function(msg) {
console.log(++pos + " MESSAGE: " + msg); });

// (A) FIRST
console.log(++pos + " FIRST"); 

// (B) NEXT 
process.nextTick(function() {
console.log(++pos + " NEXT") });

// (C) QUICK TIMER 
setTimeout(function() { console.log(++pos + " QUICK TIMER")
}, 0);

// (D) LONG TIMER 
setTimeout(function() {
console.log(++pos + " LONG TIMER") }, 10);

// (E) IMMEDIATE
setImmediate(function() {
console.log(++pos + " IMMEDIATE") });

// (F) MESSAGE HELLO! 
messenger.emit("message", "Hello!");

// (G) FIRST STAT 
fs.stat(__filename, function() {
console.log(++pos + " FIRST STAT"); 
});

// (H) LAST STAT 
fs.stat(__filename, function() {
console.log(++pos+ " LAST STAT");
});

// (I) LAST 
console.log(++pos + " LAST");

/**
 * 1 FIRST
2 MESSAGE: Hello!
3 LAST
4 NEXT
5 QUICK TIMER
6 FIRST STAT
7 LAST STAT
8 IMMEDIATE
9 LONG TIMER
 */

/**
 * A, F, and I execute in the main program flow and as such they will 
 * have the first priority in the main thread (this is obvious; your 
 * JavaScript executes its instructions in the order they are written, 
 * including the synchronous execution of the emit callback).
With the main call stack exhausted, the event loop is now almost reading 
to process I/O operations. This is the moment when nextTick requests 
are honored slotting in at the head of the event queue. This is when B is 
displayed.
The rest of the order should be clear. Timers and I/O operations will 
be processed next, (C, G, H) followed by the results of the setImmediate 
callback (E), always arriving after any I/O and timer responses are 
executed.
Finally, the long timeout (D) arrives, being a relatively far-future 
event.
Notice that re-ordering the expressions in this program will not change 
the output order (outside of possible re-ordering of the STAT results, 
which only implies that they have been returned from the thread pool 
in different order, remaining as a group in the correct order as relates 
to the event queue).

 */
