const fs = require('fs');

try {
    fs.writeFileSync('./first.txt', 'First file text')
    console.log('written')
    fs.appendFileSync('./first.txt', '\n One more line')
    console.log('append')
    fs.renameSync('./first.txt', './renamed-first.txt')
    console.log('renamed')

} catch (error) {
    console.log(error);
}