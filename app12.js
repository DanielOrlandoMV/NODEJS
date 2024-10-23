const express= require('express')
const app = express()
const port = 8080

app.set('view engine','hbs')

app.use(express.static('public3'))

app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/generic',(req,res)=>{
    res.sendFile(__dirname + '/public3//template/generic.html')
})

//habilitamos la ruta elements HTT://localhost:8080/elements

app.get('/elements', (req,res)=>{
    res.sendFile(__dirname + '/public3/template/elements.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
})

/**
 * para ejecutar la aplicacion se tiene que utilizar   node app12.js
 * en este momento ya tenemos renderizado la homepage pero aun no hemos 
 * renderizado las demas partes de la pagina es decir sus opciones
 * de elements y generic
 * visitar el sitio web http://localhost:8080
 * el beneficio en este punto, es que ya podemos tener la capacidad de
 * reutilizar codigo
 */