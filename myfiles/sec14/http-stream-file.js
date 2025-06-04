import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    const filePath = './files/index.html';
    if (req.url === "/" && req.method === 'GET') {
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        readStream.pipe(res);
    }
    if (req.url === "/no-stream" && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error')
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        })
    }
})

server.listen(3000, () => {
    console.log("Server started on port: " + server.address().port);
})