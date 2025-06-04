const a = {'a': 1, 'b': 2, 'c': 3, 'd': 4};
a['a'] = 3;
console.log(a);

function myFunction(a, b) {
    let c
    c = a + b
    return c
}

const myFunction2 = (a , b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

myFunction2(1 , 2)

const myArray = [1, 2, 3]
myArray[0] = 2
console.log(myArray)

const newArray = myArray.map(el => el * 3)
console.log(newArray)
console.log(myArray)

let c = 1
c++
console.log(c)

const profile = {
    name: "Emma",
    age: 25,
    isLogin: true,
}

let { name, age } = profile
console.log(name)
name = "Ira"
console.log(name)
console.log(profile)

const myArray2 = ["Apple", "Banana"]
const [fruitOne, fruitTwo] = myArray2

const value = 5
const value2 = value > 0 ? 10 : -10
console.log(value2)

class Comment {
    constructor(text) {
        this.text = text
        this.votes = 0
    }

    upvote() {
        this.votes += 1
    }
}

const firstComment = new Comment("Some text")
console.log(firstComment.text)
firstComment.upvote()
console.log(firstComment.votes)

class ExtendedArray extends Array {
    info() {
        console.log(`This array has ${this.length} elements`)
    }
}

const myExtendedArray = new ExtendedArray(1, 2, 4, 5)
myExtendedArray.info()

const myPromise = new Promise((resolve, reject) => {
    // resolve reject
});

myPromise
    .then(value => {
        //дія якщо успішно. значення, яке передано в resolve
    })
    .catch(error => {
        //дія якщо не успішно. значення яке передано в reject
    })

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

const asyncFunc = async () => {
    //await new Promise(resolve => setTimeout(resolve, 1000))
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts'

fetchData(url).then(data=> {
    console.log(data)
})
