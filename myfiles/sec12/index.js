const oath = require('path')
const path = require("path");

const filePath = '/Users/emmasamojlova/Desktop/index.js'
const filePathTxt = '/Users/emmasamojlova/Desktop/file.txt'
const relativePath = './node/movie.mov'
const dirPath = './node/'

console.log(path.isAbsolute(filePathTxt))
console.log(path.isAbsolute(relativePath))

console.log(path.basename(filePath))
console.log(path.basename(dirPath))

console.log(path.dirname(filePath))
console.log(path.dirname(dirPath))

console.log(path.resolve(relativePath))

console.log(path.extname(relativePath))
console.log(path.extname(dirPath))

console.log(path.parse(filePath))

const parsedPath = path.parse(filePath)
console.log(path.join(parsedPath.dir, `new-${parsedPath.name}.mjs`))

console.log()
console.log()
console.log()
console.log()