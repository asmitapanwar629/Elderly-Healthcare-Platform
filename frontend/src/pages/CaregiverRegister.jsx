import React,
{
 useState
}
from "react";

import axios from "axios";

function CaregiverRegister() {

 const [formData,
 setFormData] =
 useState({

  name:"",
  phone:"",
  qualification:"",
  experience:""

 });

 const handleChange =
 (e)=>{

  setFormData({

   ...formData,

   [e.target.name]:
   e.target.value

  });

 };

 const handleSubmit =
 async (e)=>{

  e.preventDefault();

  try{

   await axios.post(

    "http://localhost:5000/api/caregivers",

    formData

   );

   alert(
    "Caregiver Added"
   );

  }

  catch(error){

   alert(
    error.response?.data?.message
   );

  }

 };

 return (

  <div className="auth-container">

   <div className="auth-box">

    <h2>
     Register Caregiver
    </h2>

    <form
     onSubmit={handleSubmit}
    >

     <input
      type="text"
      name="name"
      placeholder="Name"
      onChange={handleChange}
     />

     <input
      type="text"
      name="phone"
      placeholder="Phone"
      onChange={handleChange}
     />

     <input
      type="text"
      name="qualification"
      placeholder="Qualification"
      onChange={handleChange}
     />

     <input
      type="text"
      name="experience"
      placeholder="Experience"
      onChange={handleChange}
     />

     <button>
      Save
     </button>

    </form>

   </div>

  </div>

 );

}

export default CaregiverRegister;