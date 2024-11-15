import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import logo from "./asset/applogo.png";
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container-style">
      <header className="app-header">
        <img src={logo} alt="Cocomo Logo" className="app-logo" />
        {/* <h1>Welcome to Cocomo</h1> */}
      </header>
      {isLogin ? (
        <>
          <Login></Login>
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsLogin(false)}>Signup</button>
          </p>
        </>
      ) : (
        <>
          <Signup></Signup>
          <p>
            Already have an account?{" "}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
