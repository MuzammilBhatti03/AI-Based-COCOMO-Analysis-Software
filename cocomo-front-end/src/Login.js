import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axios"; // Import the custom axios instance
import styles from "./myapp.css";
import LoadingScreen from './LoadingScreen';

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/auth/login", formData); // Using axios instance
      const { token } = response.data;
      alert("Login successful");
      handleLogin(token);
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingScreen loadingText="Loading... "/>
      ) : (
        <>
          <h2 className={styles.title}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputField}>
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
            <div className={styles.inputField}>
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
            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              Login
            </button>
          </form>
          <p className={styles.text}>
            Don't have an account?{" "}
            <button
              className={styles.linkButton}
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
