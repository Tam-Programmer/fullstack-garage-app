import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true; // to store cookies

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/dashboard/login", values);
      if (res.data.status === "Success") {
        localStorage.setItem("LoggedIn", "true");
        localStorage.setItem('Role', res.data.role);
        if (res.data.role === "admin") {
          navigate("/dashboard"); // Redirect to the admin dashboard
        } else if (res.data.role === "employee") {
          navigate("/contact"); // Redirect to the employee dashboard
        } else {
          navigate("/team"); // Redirect to the customer
        }
      } else {
        navigate("/register"); // Redirect to the registration page
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>
          Don&apos;t have an account? <Link to="/register">Sign Up Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;