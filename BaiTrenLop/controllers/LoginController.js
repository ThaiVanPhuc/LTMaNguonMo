// controllers/authController.js
const User = require("../models/user");
// const bcrypt = require("bcryptjs");

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid password");
    }

    req.session.userId = user._id;
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Đăng xuất
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.redirect("/");
  });
};
