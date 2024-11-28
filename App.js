import React from "react";
import "./App.css";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";

function App() {
  return (
    <div className="app">
      <h1>Role-Based Access Control (RBAC) Dashboard</h1>
      <div className="sections">
        <UserManagement />
        <RoleManagement />
        <PermissionManagement />
      </div>
    </div>
  );
}

export default App;
