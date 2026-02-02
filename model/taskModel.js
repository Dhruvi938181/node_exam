const mongoose=require('mongoose')
const TaskSchema=mongoose.Schema({
    title:{type:String},
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "data"
    }
})

const task=mongoose.model("task",TaskSchema)
module.exports=task