const express= require('express')
const app = express()
const port = 8080

app.use(express.static('public2'))


//habilitamos la ruta generic dondeesta el templated
app.use(express.static('public2'))


app.get('/generic',(req,res)=>{
    res.sendFile(__dirname + '/public2/generic.html')
})

//habilitamos la ruta elements HTT://localhost:8080/elements

app.get('/elements', (req,res)=>{
    res.sendFile(__dirname + '/public2/elements.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
})
