/**
 * manejo de rutas invalidas
 */

const express=require('express')
const app=express()

app.get('/',function(req,res){
res.send('home page')
})


app.get('/hola-mundo',function(req,res){
    res.send('hola mundo en su respectiva ruta')

})

//validadcion prara cualquier ruta que no este definida
//localhost://8080/ruta no definida
app.get('*',function(req,res){
    res.send('404| page not found')
    })
    
app.listen(8080)