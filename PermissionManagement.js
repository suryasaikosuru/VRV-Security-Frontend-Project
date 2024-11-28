import React, { useState } from "react";

function PermissionManagement() {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState("");

  const addPermission = () => {
    if (newPermission.trim() !== "") {
      setPermissions([...permissions, newPermission]);
      setNewPermission("");
    }
  };

  const deletePermission = (index) => {
    setPermissions(permissions.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>Permission Management</h2>
      <input
        type="text"
        placeholder="Enter permission"
        value={newPermission}
        onChange={(e) => setNewPermission(e.target.value)}
      />
      <button onClick={addPermission}>Add Permission</button>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>
            {permission}
            <button onClick={() => deletePermission(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PermissionManagement;
