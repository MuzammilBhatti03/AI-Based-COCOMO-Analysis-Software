import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./myapp.css"; // Assuming you're using this CSS file
import LoadingScreen from './LoadingScreen';
const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (formData.email === "abc@gmail.com" && formData.password === "123") {
        alert("Login successful");
        handleLogin(); // Update authentication state
        navigate("/home"); // Navigate to the Home page
      } else {
        alert("Invalid credentials");
      }
      setLoading(false);
    }, 2000);
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
