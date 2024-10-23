/**
 * ejercicio sirviendo mas de un contenido estatico
 * este ejercicio se enfoca en validar contenido estatico a servir an el PATH
 * de la carpeta public
 */

const express=require('express')
const app=express()
const port=8080

//servir contenido estatico de la pagina principal /http://localhost:8080
app.use(express.static('public'))

//servir la ruta /http://localhost:8080/hola-mundo
app.get('/hola-mundo', (req,res)=>{
    res.sendFile('hola mundo en su respectiva ruta')
})

//servir la ruta invalida /http://localhost:8080/invalida
//__dirname+ path completo absoloto del recurso a desplegarss
app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/404.html')
})
// metodo callback para habilitar el servidorweb en e puerto 8080
app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
})