const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(2));
}
console.log('Program start')

 //close events
fs.writeFile('./test.txt', 'Hello Node.js', () => info('File written'))
//Promises
Promise.resolve().then(() => info('Promise 1'))

//next tick
process.nextTick(() => info('Next tick 1'))

// set immediate (check)
setImmediate(() => info('immediate 1'))

//Timeouts
setTimeout(() => info('Timeout 1'), 0)
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout 2')
}, 100)

//Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount +=1}`)
    if (intervalCount === 2) clearInterval(intervalId)
}, 50)

// i/o
dns.lookup('localhost', (err, address, family) => {
    info(`dns 1 localhost ${address}`)
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3'))
})

console.log('Program end')