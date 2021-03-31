const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let studentSchema=new Schema({
    name: {type: String, required: true, max: 100},
    program: {type: String, required: true, max: 100}
})


module.exports=mongoose.model('Student', studentSchema);