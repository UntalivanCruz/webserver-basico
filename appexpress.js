const express = require('express')
const app = express()

app.use(express.static(__dirname+ '/public'))

/*app.get('/', function (req, res) {
    let datos={
        nombre:'Ivan',
        Edad:28,
        status:true,
        admin: req.url
    }
  res.json(datos)
})*/

app.get('/saludar', (req, res)=> {
  res.send('hola')
})
 
app.listen(8080,()=>{
    console.log('Corriendo Web Server')
})