const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;
let count = 1;

const server = http.createServer((req, res) =>{
    console.log('Visit:-',count++);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end(`Hey new server`);
});

server.listen(port,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${port}/`);
});