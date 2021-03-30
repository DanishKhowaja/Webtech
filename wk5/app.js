const express=require('express')
const bodyparser=require('body-parser')
const product=require('./routes/product.route')
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

const app=express()

mongoose.connect("mongodb://localhost/ProductDb",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connected to Database Successfully")
})
.catch(err =>{
    console.log("Cannot connected to database",err)
    process.exit();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/product',product)


app.listen(3000,()=>{
    console.log("the server is running on port 3000")
});