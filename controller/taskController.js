const taskModel = require("../model/taskModel");

const addTask = async (req, res) => {
  const data = await taskModel.create(req.body);
  res.send(data);
};

const getTask = async (req, res) => {
  const data = await taskModel.find({});
  res.render("taskList",{data});
  
};

const deleteTask = async (req, res) => {
  const id=req.params.id
  const data = await taskModel.findByIdAndDelete(id);
  res.redirect("/task")
};

const editTask = async (req, res) => {
  const id = req.params.id;
  const data = await taskModel.findByIdAndUpdate(id, req.body);
  res.render("taskForm",{data})
};

const updateTask=async(req,res)=>{
   await taskModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/task");
}

module.exports = { addTask,getTask,editTask,deleteTask ,updateTask};
