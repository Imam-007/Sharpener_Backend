const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Md Aurangzeb'); 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Md Aurangzeb!\n');
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
