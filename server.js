const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    
    const { url, method } = request;
    
    if(url === '/books'){
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>GET</h1>');
        }
    
        if(method === 'POST') {
            response.statusCode = 200;
            response.end('<h1>POST</h1>');
        }
    
        if(method === 'PUT') {
            response.statusCode = 200;
            response.end('<h1>PUT</h1>');
        }
    
        if(method === 'DELETE') {
            response.statusCode = 200;
            response.end('<h1>DELETE</h1>');
        }
    }else{
        response.statusCode = 404;
        response.end('<h1>Not Found!</h1>')
    }
};
 
const server = http.createServer(requestListener);
 
const port = 9000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});