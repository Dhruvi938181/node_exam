const mongoose=require('mongoose')
const categorySchema=mongoose.Schema({
    category:{type:String},
    discription:{type:String}
    
})

const category=mongoose.model("category",categorySchema)
module.exports=category