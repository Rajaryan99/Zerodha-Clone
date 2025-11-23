// src/landing_page/signup/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// If you created src/api.js (recommended), import that; otherwise fallback to axios
// import API from "../../api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };

  const handleError = (err) => toast.error(String(err), { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(String(msg), { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // If you have src/api.js, use: const res = await API.post('/signup', inputValue);
      console.log("Sending signup request:", inputValue);
      const res = await axios.post(
        "http://localhost:8080/signup", // change if your route is prefixed
        inputValue,
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      console.log("Signup response:", res.status, res.data);

      const { success, message } = res.data || {};
      if (success) {
        handleSuccess(message || "Account created");
        setTimeout(() => navigate("/login"), 900);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (error) {
      // More helpful error reporting:
      console.error("Signup request error:", error);
      const serverMsg = error?.response?.data?.message || error?.response?.data || error.message || "Network error";
      handleError(serverMsg);
    } finally {
      setLoading(false);
      setInputValue({ email: "", password: "", username: "" });
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={inputValue.email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            name="username"
            value={inputValue.username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" disabled={loading}>{loading ? "Creating..." : "Submit"}</button>

        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
