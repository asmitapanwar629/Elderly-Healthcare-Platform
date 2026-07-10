const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const booking =
    await Booking.create(req.body);

    res.status(201).json(booking);

  } catch(error) {

    res.status(500).json({
      message:error.message
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const bookings =
    await Booking.find();

    res.json(bookings);

  } catch(error) {

    res.status(500).json({
      message:error.message
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const booking =
    await Booking.findByIdAndUpdate(

      req.params.id,

      req.body,

      { new: true }

    );

    res.json(booking);

  }

  catch(error) {

    res.status(500).json({

      message:error.message

    });

  }

});

module.exports = router;