import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import logo from "./asset/applogo.png";

const App = ({ handleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container-style">
      <header className="app-header">
        <img src={logo} alt="Cocomo Logo" className="app-logo" />
      </header>
      {isLogin ? (
        <>
          <Login handleLogin={handleLogin} />
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsLogin(false)}>Signup</button>
          </p>
        </>
      ) : (
        <>
          <Signup />
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
