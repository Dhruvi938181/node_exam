

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");

  const decoded = jwt.verify(token, "SECRETKEY");
  req.user = decoded;
  next();
};

