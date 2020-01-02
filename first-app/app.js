function sayHello(name) {
    console.log('Hello '+name);
}

sayHello('Bishwa');

console.log(module);




const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);

const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(arg) {
    console.log('Liatener called',  arg);
});

// In Es6
/**
 * emitter.on('messageLogged', (arg) => {
    console.log('Liatener called',  arg);
});
 */


logger.log('message');
