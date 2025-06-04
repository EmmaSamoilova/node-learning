const fs = require('fs');

fs.writeFile('./first.txt', 'First file text', (err) => {
    if (err) console.error(err);
    else {
        console.log('written')
        fs.appendFile('./first.txt', '\n One more line', (err) => {
            if (err) console.error(err);
            else {
                console.log('append')
                fs.rename('./first.txt', './renamed-first.txt', (err) => {
                    if (err) console.error(err);
                    else {
                        console.log('renamed')
                    }
                })
            }
        })
    }
})
