const comments = require('./data.js');
const fs = require('fs');
const querystring = require('querystring');

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.write('<html><body><div>');
    res.write('<h1>Hello World!<h1/>')
    res.write('</div></body></html>');
    return res.end()
}


function getText(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    return res.end('Hello World! plain text')
}

function getHome(req, res) {
    fs.readFile('./home.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server Error');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=UTF-8');
            res.end(data);
        }
    })
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify(comments))
}

function handleNotFound(req, res) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/html')
    return res.end('<h1>Page not found</h1>')
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain')

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            //console.log(body);
            try {
                const comment = querystring.parse(body);
                comments.push(comment)
                res.statusCode = 200;
                res.end('comment was successfully');
            } catch (error) {
                res.statusCode = 400;
                res.end('invalid comment');
            }
        })
    } else if (req.headers['content-type'] === 'application/json') {
        let comment = '';
        req.on('data', (chunk) => {
            comment += chunk;
        })
        req.on('end', () => {
            try {
                comments.push(JSON.parse(comment));
                res.statusCode = 200;
                res.end('comment was successfully');
            } catch (error) {
                res.statusCode = 400;
                res.end('invalid comment');
            }
        })
    } else {
        res.statusCode = 400;
        res.end('comment was not found')
    }
}

/*
exports.getHTML = getHTML;
exports.getText = getText;
exports.getComments = getComments;
exports.handleNotFound = handleNotFound;*/
module.exports = {
    getHTML,
    getText,
    handleNotFound,
    getComments,
    postComment,
    getHome,
}