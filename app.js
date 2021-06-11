const express=require('express')
const app=express()
const path=require('path')
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
const file=path.resolve('src','index.html')
    res.sendFile(file)
})

app.get('/Contact', function(req,res){
    const file=path.resolve('src','contact.html')
        res.sendFile(file)
    })
    
app.listen(3000)