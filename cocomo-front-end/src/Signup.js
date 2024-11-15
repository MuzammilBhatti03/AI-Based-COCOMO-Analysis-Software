import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // Add signup API call here
  };

  return (
    <div className="container">
      <h2 className="title">Signup</h2>
      <form onSubmit={handleSubmit} className="form">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="inputContainer">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="inputContainer">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
        </div>
        <div
          style={{
            // display: "flex",
            // flexDirection: "row",
            gap: "20px",
            width: "100%",
          }}
        >
          <div className="inputField" style={{ flex: 1 }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="inputField" style={{ flex: 1 }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
        </div>

        <div className="inputField">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="inputField">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
