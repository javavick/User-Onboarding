import React, { useState } from "react";
import "./App.css";
import FormikMainForm from "./components/Form.js";
import Users from "./components/Users.js";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Users users={users} />
      <FormikMainForm users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
