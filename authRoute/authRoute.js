const express = require("express");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password missing or misspelled" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("LOGIN HIT");
  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Wrong password");

    const token = jwt.sign({ id: user._id, role: user.role },"SECRETKEY");

  res.cookie("token", token);
  return res.redirect("/task");
});

router.get("/logout", (req,res)=>{
  res.clearCookie("token");
  res.redirect("/login");
});


router.get("/login", (req, res) => res.render("login"));
router.get("/signup", (req, res) => res.render("register"));


module.exports = router;
