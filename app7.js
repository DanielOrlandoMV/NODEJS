/**
 * ejercicio mejorando el codigo
 * se agrega un callback para que agregara el mensaje en la cconsola de escuchando puesto 
 * para se agrega la variable port = 8080
 * se cambian las funciones de las rutas, por funciones tipo flecha
 */

const express=require('express')
const app=express()
const port=8080

app.get('/',(req,res)=>{
res.send('home page')})

app.get('/hola-mundo',(req,res)=>{
    res.send('hola mundo en su respectiva ruta')

})

app.get('*',(req,res)=>{
    res.send('404| page not found')
})

app.listen(port,()=>{
console.log(`example app listening at https:localhost: ${port}`);
})

/**
 * al ejecutar esta ap,icacion probar las siguientes rutas
 * https://localhost:8080
 *  https://localhost:8080/hola-mundo
 * 
 * luego probar una ruta invalida cop
 * https://localhost:8080/nueva-ruta
 */
