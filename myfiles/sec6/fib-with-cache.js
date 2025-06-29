setTimeout(() => console.log('Timeout'), 0)

const cache = new Map()
function fib(n) {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            return resolve(n)
        }
        if (cache.has(n)) {
            return resolve(cache.get(n))
        }
        setImmediate(() => {
            fib(n-1).then((fib1) => fib(n-2).then((fib2) => {
                cache.set(n, fib1 + fib2)
                resolve(fib1 + fib2)
            }))
        })
    })
}

fib(1000).then((res) => console.log(res))