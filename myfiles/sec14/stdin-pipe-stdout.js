import stream from "node:stream";

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    }
})

const reverseStream = new stream.Transform(
    {
        transform(chunk, encoding, callback) {
            const arrayOfChars = chunk.toString().split('');
            const lastChar = arrayOfChars.pop()
            const reversed = arrayOfChars.reverse().concat(lastChar).join('');
            callback(null, reversed);
        }
    }
)

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStream)
    .pipe(process.stdout)

//Pipe to file
//const filePath = './files/stdin-dump.txt';
//const writeStream = fs.createWriteStream(filePath);
//process.stdin.pipe(writeStream);

//Pipe to stdout
//process.stdin.pipe(process.stdout)
