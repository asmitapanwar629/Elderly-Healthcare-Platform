import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {

  return (
    <div style={{ padding: "30px" }}>

      <h1>Admin Dashboard</h1>

      <br />

      <Link to="/admin/users">
        <button>View Users</button>
      </Link>

      <br /><br />

      <Link to="/admin/bookings">
        <button>Manage Bookings</button>
      </Link>

    </div>
  );
}

export default AdminDashboard;