const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write('<h1>Hello,Phuc</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
