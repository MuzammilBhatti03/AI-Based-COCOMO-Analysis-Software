import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Routes>
        {/* If authenticated, redirect to Home */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Auth;