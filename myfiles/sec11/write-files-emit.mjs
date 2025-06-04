import fs from "fs";
import {EventEmitter} from 'events'

const fileEmmiter = new EventEmitter()

fileEmmiter.on('writeComplete', (event) => {
    console.log('written')
    fs.appendFile('./first.txt', '\n One more line', () => {
        fileEmmiter.emit('appendComplete')
    })
})

fileEmmiter.on('appendComplete', () => {
    console.log('append')
    fs.rename('./first.txt', './renamed-first.txt', () => {
        fileEmmiter.emit('renameComplete')
    })
})

fileEmmiter.on('renameComplete', () => {
    console.log('renameComplete')
})

fs.writeFile('./first.txt', 'First file text', () => {
    fileEmmiter.emit('writeComplete')
})