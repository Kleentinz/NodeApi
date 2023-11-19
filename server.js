const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to backend development');
        res.end();
        }
    if (req.url === '/api/course'){
        res.write(JSON.stringify({id: 1, name: 'Rasheed', email: 'jubril@rasheed.com', phone: '08025229043'}));
        res.end();
    } 

    if (req.url === '/api/student'){
        res.write(JSON.stringify({id: 1, name: 'Rasheed', email: 'jubril@rasheed.com', phone: '08025229043'}));
        res.end();
    } 
});



server.listen(3000);
console.log('Listening on port 3000....')