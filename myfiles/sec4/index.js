const fs = require('fs');


const data = fs.readFileSync('./text.txt', 'utf8');
console.log('Continue1')

fs.readFile('./text.txt', 'utf8', (err, data2) => {
    if (!err) {
        console.log('File reading finished');
        console.log(data2);
    }
});
console.log('Continue2')