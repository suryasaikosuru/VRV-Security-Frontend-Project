import React, { useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (newUser.trim() !== "") {
      setUsers([...users, { name: newUser, role: "User" }]);
      setNewUser("");
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.role}
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
