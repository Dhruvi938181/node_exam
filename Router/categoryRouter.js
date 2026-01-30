const express = require("express");
const { addCategory, getCategory, deleteCategory, editCategory, updateCategory } = require("../controller/categoryController");
const auth = require("../middleware/auth");

const C_router = express.Router();

C_router.post("/",auth, addCategory);
C_router.get("/",auth, getCategory);
C_router.get("/delete/:id",auth, deleteCategory);
C_router.get("/edit/:id",auth, editCategory);
C_router.post("/update/:id",auth,updateCategory)


module.exports = C_router;
