var events = require('events');
function getEmitter() {
var emitter = new events.EventEmitter(); emitter.emit('start');
return emitter;
}
var myEmitter = getEmitter();
myEmitter.on("start", function() { console.log("Started");
});