import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
    console.log(`Source directory ${sourceDir} doesn't exist`);
    process.exit(0);
}

if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, {recursive: true});
    console.log(`Destination directory ${destinationDir} removed`);
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    files.forEach((file, index) => {
        const sourceFilePath = path.join(sourceDir, file);
        const destinationFilePath = path.join(destinationDir, `${index + 1}-${file}`);

        const readStream = fs.createReadStream(sourceFilePath);
        const writeStream = fs.createWriteStream(destinationFilePath);
        readStream.pipe(writeStream);

        writeStream.on('finish', () => {
            console.log(`${file} was copied`);
        })
    })
})