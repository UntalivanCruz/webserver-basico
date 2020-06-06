const express = require('express')
const app = express()

app.get('/', function (req, res) {
    let datos={
        nombre:'Ivan',
        Edad:28,
        status:true,
        admin: req.url
    }
  res.json(datos)
})
 
app.listen(8080,()=>{
    console.log('Corriendo Web Server')
})