import fs from 'fs';

const fileName = './files/first.txt'
const copiedFileName = './first-copied.txt'

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on('end', () => console.log('readStream ended'))
writeStream.on('close', () => console.log('writeStream ended'))
writeStream.on('finish', () => console.log('writeStream finished'))