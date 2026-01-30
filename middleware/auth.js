const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    console.log("Cookies:", req.cookies);
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, "SECRETKEY");
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.redirect("/login");
  }
};

module.exports = auth;
