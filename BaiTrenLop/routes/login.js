// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/LoginController");

// Trang login
router.get("/login", authController.loginPage);

// Xử lý đăng nhập
router.post("/login", authController.login);

// Xử lý đăng xuất
router.get("/logout", authController.logout);

module.exports = router;
