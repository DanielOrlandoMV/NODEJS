const express=require('express')
const hbs = require('hbs')

const app= express()
const port=8080


//utilizacion de handlebars  hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//uso de parciales "codigo que se repite en mas de un lugar a paginas web"
hbs.registerPartials(__dirname+'/views/partials')

// servir contenido estatico public3 donde esta el templated
app.use(express.static('public3'))

/**
 * enviando objetos a home3.hbs, pagina renderizada res.render
 * esta pagina tiene aplicada portails
 */

app.get('/', (req, res) => {
    res.render('home3',{
        nombre: "Daniel Orlando",
        titulo: "Curso de Node Js 2024"
    })
})

/**
 * enviando objeto a generic.hbs, pagina renderizada res,render
 * esta pagina tiene aplicada portails
 */

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: "Daniel Orlando",
        titulo: "Curso de Node Js 2024"
    })
})

/**
 * enviando objeto a elements.hbs, pagina renderizada res,render
 * esta pagina tiene aplicada portails
 */

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: "Daniel Orlando",
        titulo: "Curso de Node Js 2024"
    })
})

app.get('*',(res,req)=>{
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`)
})