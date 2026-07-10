import React,{useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookService() {

  const { serviceName } =
  useParams();

  const user =
  JSON.parse(
    localStorage.getItem("user")
  );

  const [date,setDate] =
  useState("");

  const handleBooking =
  async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/bookings",
        {
          userName:user.name,
          serviceName,
          bookingDate:date
        }
      );

      alert(
        "Booking Successful"
      );

    } catch(error) {

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

    }

  };

  return (

    <div
      style={{
        padding:"30px"
      }}
    >

      <h2>{serviceName}</h2>

      <input
        type="date"
        onChange={(e)=>
          setDate(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={handleBooking}
      >
        Confirm Booking
      </button>

    </div>

  );
}

export default BookService;