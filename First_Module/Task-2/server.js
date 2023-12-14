const http=require('http');

const server=http.createServer((req,res)=>{
    const url=res.url;
    
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>Hii my self imam</body>');
        res.write('</html>');
        res.end();
    }
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>Hello imam</body>');
    res.write('</html>');
    res.end();
});

const PORT=2000;

server.listen(PORT, () => {
      console.log(`Server is running on imam  http://localhost:${PORT}/`);
});