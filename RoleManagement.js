import React, { useState } from "react";

function RoleManagement() {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  const addRole = () => {
    if (newRole.trim() !== "") {
      setRoles([...roles, newRole]);
      setNewRole("");
    }
  };

  const deleteRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>Role Management</h2>
      <input
        type="text"
        placeholder="Enter role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
      />
      <button onClick={addRole}>Add Role</button>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>
            {role}
            <button onClick={() => deleteRole(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleManagement;
