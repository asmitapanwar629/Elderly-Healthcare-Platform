import React,
{
 useEffect,
 useState
}
from "react";

import axios from "axios";

function AdminBookings() {

 const [bookings,
 setBookings] =
 useState([]);

 const loadBookings = () => {

  axios
  .get(
   "http://localhost:5000/api/bookings"
  )
  .then((res) => {

   setBookings(res.data);

  });

 };

 useEffect(() => {

  loadBookings();

 }, []);

 const updateStatus =
 async (id,status) => {

  await axios.put(

   `http://localhost:5000/api/bookings/${id}`,

   { status }

  );

  loadBookings();

 };

 return (

  <div style={{padding:"30px"}}>

   <h2>Manage Bookings</h2>

   <table border="1">

    <thead>

     <tr>

      <th>Name</th>
      <th>Service</th>
      <th>Status</th>
      <th>Action</th>

     </tr>

    </thead>

    <tbody>

     {bookings.map((b)=>(

      <tr key={b._id}>

       <td>{b.userName}</td>
       <td>{b.serviceName}</td>
       <td>{b.status}</td>

       <td>

        <button
         onClick={() =>
         updateStatus(
          b._id,
          "Approved"
         )}
        >
         Approve
        </button>

        <button
         onClick={() =>
         updateStatus(
          b._id,
          "Rejected"
         )}
        >
         Reject
        </button>

       </td>

      </tr>

     ))}

    </tbody>

   </table>

  </div>

 );

}

export default AdminBookings;