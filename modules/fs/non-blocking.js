var fs = require('fs');
var event = require('events');

const myEmitter = new event.EventEmitter();

fs.readFile('text.txt', function(err, data) {
    console.log(data.toString());
    myEmitter.emit('readFile');
    if(err){
        console.log(err);
    }
    setTimeout(()=>{
        console.log('After 2 sec')
    }, 2000);
});

console.log('Start Here');

myEmitter.on('readFile', () => {
    console.log('\n Read event occured!');
});
