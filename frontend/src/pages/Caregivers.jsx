import React,
{
 useEffect,
 useState
}
from "react";

import axios from "axios";

function Caregivers() {

 const [caregivers,
 setCaregivers] =
 useState([]);

 useEffect(()=>{

  axios
  .get(
   "http://localhost:5000/api/caregivers"
  )
  .then((res)=>{

   setCaregivers(
    res.data
   );

  });

 },[]);

 return (

  <div style={{padding:"30px"}}>

   <h1>
    Available Caregivers
   </h1>

   {caregivers.map((c)=>(

    <div
     key={c._id}
     className="service-card"
    >

     <h3>{c.name}</h3>

     <p>
      Qualification:
      {c.qualification}
     </p>

     <p>
      Experience:
      {c.experience}
     </p>

    </div>

   ))}

  </div>

 );

}

export default Caregivers;