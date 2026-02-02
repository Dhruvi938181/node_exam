const taskModel = require("../model/taskModel");
const categoryModel = require("../model/categoryModel");

const addTask = async (req, res) => {
  await taskModel.create({
    title: req.body.title,
    categoryId: req.body.categoryId,
    userId: req.user.id
  });

  res.redirect("/task");
};

const getTask = async (req, res) => {
  let data;

  if (req.user.role === "admin") {
    data = await taskModel
      .find()
      .populate("categoryId userId");
  } else {
    data = await taskModel
      .find({ userId: req.user.id })
      .populate("categoryId userId");
  }

  const categories = await categoryModel.find();

  res.render("taskItem", {
    data,
    categories,
    user: req.user
  });
};

const deleteTask = async (req, res) => {
  await taskModel.findByIdAndDelete(req.params.id);
  res.redirect("/task");
};

const editTask = async (req, res) => {
  const data = await taskModel.findById(req.params.id);
  res.render("taskForm", { data });
};

const updateTask = async (req, res) => {
  await taskModel.findByIdAndUpdate(req.params.id, {
    title: req.body.title
  });
  res.redirect("/task");
};

module.exports = {
  addTask,
  getTask,
  deleteTask,
  editTask,
  updateTask
};
