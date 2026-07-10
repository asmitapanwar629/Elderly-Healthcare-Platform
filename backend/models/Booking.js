const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },

  serviceName: {
    type: String,
    required: true
  },

  bookingDate: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  }

}, { timestamps: true });

module.exports =
mongoose.model("Booking", bookingSchema);