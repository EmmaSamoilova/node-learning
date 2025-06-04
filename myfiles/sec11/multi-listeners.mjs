import {EventEmitter} from 'events';

const mYEmmitter = new EventEmitter();

mYEmmitter.on('myEvent', () => {
    console.log('first event listeners')
})

mYEmmitter.on('myEvent', () => {
    console.log('second event listeners')
})

setTimeout(() => mYEmmitter.emit('myEvent'), 1000)

mYEmmitter.setMaxListeners(25)
console.log(mYEmmitter.getMaxListeners())
console.log(mYEmmitter.eventNames())