let isRunning = true

setTimeout(() => { isRunning = false; }, 10)
process.nextTick(() => console.log('Next tick'))

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve())
        //with resolve we stay at the same event loop iteration
        //resolve()
    })
}

async function whileLoop() {
    while (isRunning) {
        console.log('while is running');
        await setImmediatePromise()
    }
}

whileLoop().then(() => {console.log('While loop ended')})