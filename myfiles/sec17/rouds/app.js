const express = require('express')
const router = require('./routes/index')

const app = express()

app.use('/', router)

app.listen(8080, () => console.log('Server started on port 8080'))