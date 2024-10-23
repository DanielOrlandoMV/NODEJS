/**
 * ejercicio enviando argumentos desde el controlador
 * instrucciones para realizar este ejercicio 
 * 1.crear una copia de home.hbs para home2.hbs
 * en el controlador de la pagina principal, crear un objeto con las
 * propiedades nombre: "tu nombre" titulo: "cursod e node"
 * en el hbs sustituir {{}} por las propiedaddes que queremos desplegar el 
 * home2.hbs examinar el codigo
 */

const express =require('express')
const app = express()
const port= 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//servir contenido estatico public3 donde esta el template
app.use(express.static('public3'))

// enviando argumentos desde el controlador al template home2 (pagina renderizada)
app.get('/', (req, res) => {
    res.render('home2',{
        nombre: "Daniel Orlando",
        titulo: "Curso de Node Js 2024"
    })
})

app.get('/generic',(req,res)=>{
    res.sendFile(__dirname + '/public3/generic.html')
})

app.get('/elements',(req,res)=>{
    res.sendFile(__dirname + '/public3/elements.html')
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
})