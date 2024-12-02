import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import logo from "./asset/applogo.png";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check for authentication status on page load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('token', token);  // Save JWT token for later use
    navigate("/home");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <div className="container-style">
      <header className="app-header">
        <img src={logo} alt="Cocomo Logo" className="app-logo" />
      </header>
      <Routes>
        {/* Default Login Route */}
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
        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />
        {/* Protected Home Route */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
