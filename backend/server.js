const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes =
require("./routes/authRoutes");

const bookingRoutes =
require("./routes/bookingRoutes");

const caregiverRoutes =
require("./routes/caregiverRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use(
 "/api/caregivers",
 caregiverRoutes
);

mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server Running on Port ${process.env.PORT}`
    );
  }
);