import React, { useState } from "react";
import axios from "./axios"; // Import the custom axios instance
import styles from "./myapp.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password === formData.confirmPassword) {
      try {
        // Send only email, username, and password to the backend
        const { confirmPassword, ...userData } = formData;
        await axios.post("/api/auth/signup", userData); // Using axios instance
        alert("Signup successful!");
        navigate("/"); // Redirect to login page after successful signup
      } catch (err) {
        alert("Error signing up, please try again.");
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Signup</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
