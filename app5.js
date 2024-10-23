/**
 * ejercicio introduccion a EXPRESS parte 2
 * aca valida la ruta  https://
 */

const express=require('express')
const app=express()

app.get('/',function(req,res){
res.send('home page')

/**
 * aca se esta eniandi un mensafe drecto , pero pedimos enviar
 * un sitio web un a opcion del sistema
 */

})


app.get('/hola-mundo',function(req,res){
    res.send('hola mundo en su respectiva ruta')

})

app.listen(8080)
/**
 * al ejecutar esta aplicacion comprobar los siguientes rutas del navegador 
 * ¿Que mensaje despliega y por que ?
 * comprobar una ruta no valida y analizar
 *
 */