import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <h1>Facebook app</h1>
      <h3>{user ? `The user logged in is ${user}` : "No user is logged in"}</h3>
      <Login />
    </div>
  );
}

export default App;
