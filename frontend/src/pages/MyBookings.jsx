import React,
{
 useEffect,
 useState
}
from "react";

import axios from "axios";

function MyBookings() {

 const [bookings,
 setBookings] =
 useState([]);

 useEffect(()=>{

  axios
  .get(
   "http://localhost:5000/api/bookings"
  )
  .then((res)=>{

   setBookings(
    res.data
   );

  });

 },[]);

 return (

  <div style={{padding:"30px"}}>

   <h1>My Bookings</h1>

   <table border="1">

    <thead>

     <tr>
      <th>Name</th>
      <th>Service</th>
      <th>Date</th>
      <th>Status</th>
     </tr>

    </thead>

    <tbody>

     {bookings.map((b)=>(
      <tr key={b._id}>

       <td>{b.userName}</td>
       <td>{b.serviceName}</td>
       <td>{b.bookingDate}</td>
       <td>{b.status}</td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 );

}

export default MyBookings;