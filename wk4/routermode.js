var express=require('express')

var router=express.Router()

router.get('/',(req,res)=>{
    res.send('welcome to my home page.')
})

router.get('/about',(req,res)=>{
    res.send('welcome to the about page.')
})

module.exports=router