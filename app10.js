const express= require('express')
const app = express()
const port = 8080

app.use(express.static('public2'))

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/hola-mundo', (req,res)=>{
    res.send('hola mundo en su respectiva ruta')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
})

/**
 * ejecutar la aplicacion node app10,js
 * visitar en el navegador el sitio web http://localhost:8080
 * ¿por que se despliega el siti web,respueste tecnica, caracteristicas que tiene la URL?
 * ¿por que no se despliegan las opciones de la pafina generic y elements? 
 */