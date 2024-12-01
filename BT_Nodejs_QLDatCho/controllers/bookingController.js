const Booking = require("../models/Booking");

// Lấy danh sách đặt chỗ
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    const formattedBookings = bookings.map((booking, index) => ({
      ...booking._doc,
      displayId: index + 1,
      formattedDate: new Date(booking.date).toISOString().split("T")[0],
    }));
    res.render("index", { bookings: formattedBookings });
  } catch (error) {
    res.status(500).send("Lỗi khi lấy danh sách đặt chỗ.");
  }
};

// Hiển thị form thêm mới
exports.showAddBookingForm = (req, res) => {
  res.render("new");
};

// Thêm mới đặt chỗ
exports.addBooking = async (req, res) => {
  const { customerName, date, time } = req.body;
  try {
    const newBooking = new Booking({
      customerName,
      date,
      time,
      status: "Pending",
    });
    await newBooking.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Lỗi khi thêm đặt chỗ.");
  }
};

// Hiển thị form sửa
exports.showEditBookingForm = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id); // Tìm booking theo ID
    if (!booking) {
      return res.status(404).send("Không tìm thấy đặt chỗ.");
    }
    res.render("index", { bookings });
  } catch (error) {
    res.status(500).send("Lỗi khi tải form chỉnh sửa.");
  }
};

// Cập nhật đặt chỗ
exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const { customerName, date, time, status } = req.body;
  try {
    await Booking.findByIdAndUpdate(id, { customerName, date, time, status });
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Lỗi khi cập nhật đặt chỗ.");
  }
};

// Xóa đặt chỗ
exports.deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Lỗi khi xóa đặt chỗ.");
  }
};
