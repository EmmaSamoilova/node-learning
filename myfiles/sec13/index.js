const http = require('http')
const {getHTML, getText, getComments, handleNotFound, postComment, getHome} = require('./handers')

const server = http.createServer((req, res) => {
    //console.log(req)
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain')
    //res.end('Hello World!')
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res)
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }
    /*    if (req.url === '/json') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            return res.end(JSON.stringify(comments))
        }*/
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }
    handleNotFound(req, res);
})

server.listen(8080, () => {
    console.log('Listening on port 8080')
})