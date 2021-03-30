var express=require('express');
var R1=require('./routermode')
var Rbooks=require('./bookroute')
var app=express()


app.use('/books',Rbooks)

app.use('/students',R1)
var server = app.listen(3000,()=>{
    console.log('the server is running on port 3000')
})