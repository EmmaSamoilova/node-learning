const fs = require('fs/promises');

fs.writeFile('./first.txt', 'First file text')
    .then(() => console.log('written'))
    .then(() => fs.appendFile('./first.txt', '\n One more line'))
    .then(() => console.log('append'))
    .then(() => fs.rename('./first.txt', './renamed-first.txt'))
    .then(() => console.log('renamed'))
    .catch(err => console.log(err));
