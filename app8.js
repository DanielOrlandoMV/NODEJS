/**
 * ejercicio servidor contenido estatico
 * 
 * el ejercicio va efocado a sustituir la impreciod de mensajes de las rutas por
 *  contenido estatico, en este caso paginas web.
 */

const express=require('express')
const app=express()
const port=8080

/**
 * se creo la carpeta public y dentro de index.html
 * se crea un middlware para habilitar la ruta al index.html
 */


/**
 * para ver el contenido estatico debemos indicarle a la aplicacion dual es la 
 * carpeta donde se almacena las paginas web, por medio de un Midleware
 * en este caso el Midleware app.use(express.static('public'))
 */

app.use(express.static('public')) //midelware para la carpeta publica 
// sete es un pat estatico
// app.get('/',(req,res)=>{
// res.send('home page')
//}) estas lineas nunca se iban a ejecutar por el midelware


app.get('/hola-mundo',(req,res)=>{
    res.send('hola mundo en su respectiva ruta')
})

app.get('*',(req,res)=>{
    res.send('404| page not found')
})

app.listen(port,()=>{
console.log(`example app listening at https:localhost: ${port}`);
})
