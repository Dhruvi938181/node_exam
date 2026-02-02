const categoryModel = require("../model/categoryModel");

const addCategory = async (req, res) => {
  const data = await categoryModel.create(req.body);
  res.send(data);
};

const getCategory = async (req, res) => {
  const data = await categoryModel.find({});
  res.render("taskList",{data});


};

const deleteCategory = async (req, res) => {
  const id = req.params.id
  const data = await categoryModel.findByIdAndDelete(id);
   res.redirect("/category");
};

const editCategory = async (req, res) => {
  const id = req.params.id;
  const data = await categoryModel.findByIdAndUpdate(id, req.body);
  res.render("editCategory", { data });
};


const updateCategory=async(req,res)=>{
   await categoryModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/category");
}


module.exports = { addCategory, getCategory, deleteCategory, editCategory ,updateCategory};
