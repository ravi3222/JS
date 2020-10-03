import React from "react";
import { useStateValue } from "./StateProvider";

function Login(props) {
  const [state, dispatch] = useStateValue();

  const loginToApp = () => {
    // console.log(props.setUser("rrrrravi"));
    console.log(state.user);
    dispatch({
      type: "SET_USER",
      user: "Raj Kumari Devi",
    });
  };

  return (
    <div>
      <h1>I am the login component</h1>
      <button onClick={loginToApp}>LOGIN</button>
    </div>
  );
}

export default Login;
