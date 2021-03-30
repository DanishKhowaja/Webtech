var express=require('express')
var router=express.Router()


router.get('/get',(req,res)=>{
    res.send("retrieve all books")
})

router.post('/add',(req,res)=>{
    res.send("add a books")
})

router.put('/update',(req,res)=>{
    res.send("update a books")
})

router.delete('/delete',(req,res)=>{
    res.send("delete a books")
})


module.exports=router