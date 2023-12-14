const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>Welcome to home</body>');
        res.write('</html>');
        return res.end();
    }else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>Welcome to About Us page</body>');
        res.write('</html>');
        return res.end();
    }else if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>Welcome to my Node Js project</body>');
        res.write('</html>');
        return res.end();
    }
});

const PORT=2000;

server.listen(PORT, () => {
      console.log(`Server is running on imam  http://localhost:${PORT}/`);
});