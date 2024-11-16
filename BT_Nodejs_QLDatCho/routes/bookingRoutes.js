const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Hiển thị danh sách đặt chỗ
router.get("/", bookingController.getAllBookings);

// Form thêm mới
router.get("/new", bookingController.showAddBookingForm);

// Thêm mới đặt chỗ
router.post("/", bookingController.addBooking);

// Form sửa
router.get("/:id/edit", bookingController.showEditBookingForm);

// Cập nhật đặt chỗ
router.put("/:id", bookingController.updateBooking);

// Xóa đặt chỗ
router.delete("/:id/delete", bookingController.deleteBooking);

module.exports = router;
