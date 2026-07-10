import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {

  const user =
  JSON.parse(localStorage.getItem("user"));

  return (

    <div style={{ padding: "30px" }}>

      <h1>
        Welcome {user?.name}
      </h1>

      <p>
        Elderly Healthcare Dashboard
      </p>

      <br />

      <Link to="/services">
        <button>
          View Services
        </button>
      </Link>

      <br /><br />

      <Link to="/my-bookings">
        <button>
          My Bookings
        </button>
      </Link>

      <br /><br />

<Link to="/admin">
  <button>
    Admin Panel
  </button>
</Link>

<Link to="/patient-profile">
 <button>
  Patient Profile
 </button>
</Link>

<br /><br />

<Link to="/caregivers">
 <button>
  View Caregivers
 </button>
</Link>

<br /><br />

<Link to="/caregiver-register">
 <button>
  Add Caregiver
 </button>
</Link>

    </div>

  );
}

export default Dashboard;