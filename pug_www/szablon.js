const pug = require('pug');
const http = require('http');
const fs = require('fs');

const compiledFunction = pug.compileFile('szablon.pug');
console.log(compiledFunction({
    tytul: 'Przykład użycia silnika szablonów PUG',
    pozdrowienie: 'Hello!'
}));

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(async (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     const html_data = await compiledFunction({
//         tytul: 'Przykład użycia silnika szablonów PUG',
//         pozdrowienie: 'Hello!'
//     });
//     res.sendFile(html_data);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
