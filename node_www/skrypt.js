// import fs module
const fs = require('fs');
const http = require('http');
const qs = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    // res.statusCode = 200;
    res.setHeader('Content-Type', 'html');

    if (req.url === '/login') {
        if (req.method === 'GET') {
            const html_data = await fs.promises.readFile('login.html', 'utf8');
            res.end(html_data);
        }
        else if (req.method === 'POST') {
            data = '';

            req.addListener('data', (chunk) => {
                data += chunk;
            });

            req.addListener('end', () => {
                const form_data = qs.parse(data);
                console.log(form_data);
                res.end(`Hello ${form_data['username']}!`);
            });
        }
        else {
            res.statusCode = 405;
            res.end('Method not allowed');
        }
    }
    else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});