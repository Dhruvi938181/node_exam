const express = require("express");
const { addTask, getTask, deleteTask, editTask, updateTask } = require("../controller/taskController");
const auth = require("../middleware/auth");

const T_router = express.Router();

T_router.post("/", auth,addTask);
T_router.get("/", auth, getTask);
T_router.get("/delete/:id", auth, deleteTask);
T_router.get("/edit/:id", auth, editTask);
T_router.post("/update/:id",auth,updateTask)
module.exports = T_router;
