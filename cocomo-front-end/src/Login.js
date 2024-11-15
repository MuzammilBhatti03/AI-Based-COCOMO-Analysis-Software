import React, { useState } from "react";
import styles from "./myapp.css"; // Ensure it's using CSS Modules
import LoadingScreen from "./LoadingScreen";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    // Simulate 2 seconds delay for login processing
    setTimeout(() => {
      console.log("Login Data:", formData);

      // Check credentials after the delay
      if (formData.email === "abc@gmail.com" && formData.password === "123") {
        alert("Login successful");
      } else {
        alert("Invalid credentials");
      }

      setLoading(false); // Set loading to false after credentials check
    }, 2000); // 2000ms delay
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingScreen loadingText="Please wait, data is loading..." />
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
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging in..." : "Login"} {/* Show different text */}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
