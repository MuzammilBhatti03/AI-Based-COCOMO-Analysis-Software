import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Page1 from "./page1"; // Import Page1 component for CocomoApp layout
import logo from "./asset/applogo.png";
import "./App.css"; // Add styles here

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check for authentication status on page load
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("token", token); // Save JWT token for later use
    navigate("/home");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="app-container">
      {/* Header with logo */}
      <header className="app-header">
        <img src={logo} alt="Cocomo Logo" className="app-logo" />
        <nav className="nav-tabs">
          {isAuthenticated && (
            <>
              <button
                className="tab"
                onClick={() => navigate("/home")}
              >
                Projects
              </button>
              <button
                className="tab"
                onClick={() => navigate("/invites")}
              >
                Invites
              </button>
              <button className="tab logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Routes for navigation */}
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
              <Page1 handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {/* Example Route for Invites */}
        <Route
          path="/invites"
          element={
            isAuthenticated ? (
              <div>
                <h1>Invites Page</h1>
                <p>Manage your invites here!</p>
              </div>
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
