const http = require('http');

http.createServer((req,res) =>{

    res.writeHead(200,{'Content-Type':'application/json'})

    let datos={
        nombre:'Ivan',
        Edad:28,
        status:true,
        admin: req.url
    }

    res.write(JSON.stringify(datos))
    res.end();
}).listen(80);

console.log('Corriendo Web Server')