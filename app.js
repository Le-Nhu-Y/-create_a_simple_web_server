const http = require ('http')
const server = http.createServer((req, res)=>{
    res.write('<h1>Hoc CodyGym de thay doi cong viec</h1><hr>');
    res.end();
});
server.listen(8080,'localhost')