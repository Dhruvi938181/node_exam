const mongoose=require('mongoose')
const categorySchema=mongoose.Schema({
    title:{type:String},
    category:{type:String},
    discription:{type:String}
    
})

const category=mongoose.model("category",categorySchema)
module.exports=category