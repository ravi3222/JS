import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout, selectUser } from "./userSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const loginToApp = () => {
    dispatch(setUser({ user: "Ravi" }));
  };

  console.log(user);

  return (
    <div>
      <h1>I am the login component</h1>
      {user ? <h2>The user is {user}</h2> : <h2>NOBODY is signed in</h2>}
      <button onClick={loginToApp}>LOG ME IN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
}

export default Login;
