const eventEmitter = require('events');
const emitter = new eventEmitter();


emitter.on('order',()=>{
    console.log('order received');
})
emitter.once('order',()=>{
    console.log('order processed once');
})
emitter.on('order',()=>{
    console.log('order processed');
})
emitter.emit('order');
emitter.emit('order');



