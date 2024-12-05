let eventEmitter = require('node:events');

let emitter = new eventEmitter();

emitter.on('event1',()=>{
    console.log('event1 called');})

emitter.once('event1',()=>{console.log('once')})
console.log(emitter.getMaxListeners())
// emitter.emit('event1');
// emitter.emit('event1');

emitter.on('event2',(x)=>{
    console.log('event1 called',x);})
emitter.emit('event2',2);

