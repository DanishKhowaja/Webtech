const express=require ("express");

var app=express();

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.get('/Books',(req,res)=>{
    res.send("Welcome to the books section.")
})

app.get('/Students',(req,res)=>{
    res.send("Welcome to the students section.")
})

app.post('/',(req,res)=>{
    res.send("You Have sent message.")
})

app.get('/Students/:studentid/books/:bookid',(req,res)=>{
    res.send(req.params)
})

app.get('/callback1',(req,res,next)=>{
    console.log("1st callback function")
    
    next()
},(req,res)=>{
    res.send("2nd callback function")
})

var server=app.listen(3000,()=>{
    console.log("The server is runnong on port 3000")
})