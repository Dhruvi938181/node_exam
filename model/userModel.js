const mongoose=require('mongoose')
const userModel=mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
})

const user=mongoose.model("data",userModel)
module.exports=user