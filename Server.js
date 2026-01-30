const express = require('express');
const app = express();
require('./config/db');

const cookieParser = require("cookie-parser");

const authRouter = require('./authRoute/authRoute');
const taskRouter = require('./Router/taskRouter');
const categoryRouter = require('./Router/categoryRouter');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/", authRouter);
app.use("/task", taskRouter);
app.use("/category", categoryRouter);


app.listen(8500, () => {
  console.log("server listen on 8500");
});
