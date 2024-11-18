import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import logoImage from "../../assets/description-logo.png";
import { Link } from "react-router-dom";
import "./Authentication.css"; // Import custom CSS file

const Authentication = ({ isLoggedInSetter }) => {
  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginObject({ ...loginObject, [id]: value });
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/students/login",
        {
          email: loginObject.email,
          password: loginObject.password,
        }
      );

      const user = response.data; // Assuming response.data contains the user object

      localStorage.setItem("student-helper-user", JSON.stringify(user));
      isLoggedInSetter(true);
      Swal.fire({
        title: "Success",
        text: "Login successful",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Invalid login",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <img className="mx-auto h-24" src={logoImage} alt="Logo" />
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="input-container">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={loginObject.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Email address"
              />
              <div className="input-animation"></div>
            </div>
            <div className="input-container">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={loginObject.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Password"
              />
              <div className="input-animation"></div>
            </div>
          </div>

          <div className="flex justify-center text-sm text-gray-600 mt-6">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register here
              </Link>
            </p>
          </div>

          <div>
            <button onClick={loginUser} type="button" className="btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentication;

