import React,
{
 useState
}
from "react";

function PatientProfile() {

 const [patient,
 setPatient] =
 useState({

  name:"",
  age:"",
  disease:""

 });

 const handleChange =
 (e)=>{

  setPatient({

   ...patient,

   [e.target.name]:
   e.target.value

  });

 };

 const handleSubmit =
 (e)=>{

  e.preventDefault();

  localStorage.setItem(

   "patient",

   JSON.stringify(patient)

  );

  alert(
   "Patient Profile Saved"
  );

 };

 return (

  <div
   style={{
    padding:"30px"
   }}
  >

   <h2>
    Patient Profile
   </h2>

   <form
    onSubmit={handleSubmit}
   >

    <input
     name="name"
     placeholder="Patient Name"
     onChange={handleChange}
    />

    <br /><br />

    <input
     name="age"
     placeholder="Age"
     onChange={handleChange}
    />

    <br /><br />

    <input
     name="disease"
     placeholder="Disease"
     onChange={handleChange}
    />

    <br /><br />

    <button>
     Save Profile
    </button>

   </form>

  </div>

 );

}

export default PatientProfile;