const express = require('express')


const app = express()

const firstHandler = (req, res, next) => {
    console.log('first handler')
    next()
}
const secondHandler = (req, res) => res.send('Hello World 2')

app.get('/', firstHandler, secondHandler)

app.listen(8080, () => console.log('Server started on port 8080'))