import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/auth/users")
      .then((res) => {
        setUsers(res.data);
      });

  }, []);

  return (

    <div style={{ padding: "30px" }}>

      <h2>All Users</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminUsers;