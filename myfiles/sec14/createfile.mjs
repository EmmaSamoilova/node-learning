//console.log(process.argv)
import fs from 'fs';
import path from "path";

if (!process.argv[2] || !process.argv[3]) {
    console.log('filename and lines')
    process.exit(0);
}

const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])
if (isNaN(linesQty)) {
    console.log('Lines must be a number')
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now())

for (let i = 1; i <= linesQty; i++) {
    writeStream.write(`Line number ${i}\n`)
}
console.log('End', performance.now())
setTimeout(() => {
    console.log('Timeout', performance.now())
})
writeStream.end(() => {
    console.log(`${fileName} was created successfully`)
});