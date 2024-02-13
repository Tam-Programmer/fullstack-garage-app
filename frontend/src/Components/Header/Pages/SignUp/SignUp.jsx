import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", values)
      .then((res) => {
        // console.log(res.data); // Log the response data to see the server's response
        if (res.data.status === "Success") {
          // console.log("Redirecting to login..."); // Log a message to check if the redirection is triggered
          navigate("/login");
        } else {
          console.log("Registration error:", res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center mt-5 container-fluid align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-auto">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fname">
              <strong>First Name:</strong>
            </label>
            <input
              onChange={(e) =>
                setValues({ ...values, firstname: e.target.value })
              }
              type="text"
              name="fname"
              autoComplete="off"
              placeholder="enter first name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname">
              <strong>Last Name:</strong>
            </label>
            <input
              onChange={(e) =>
                setValues({ ...values, lastname: e.target.value })
              }
              type="text"
              name="lname"
              autoComplete="off"
              placeholder="enter last name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">
              <strong>Phone:</strong>
            </label>
            <input
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              type="phone"
              name="phone"
              autoComplete="off"
              placeholder="enter phone number"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              name="email"
              autoComplete="off"
              placeholder="enter email here"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type="password"
              name="password"
              placeholder="enter password"
              className="form-control rounded-0"
            />
          </div>
          <button
            className="btn btn-success w-100 rounded-0 mb-2"
            type="submit"
          >
            Submit
          </button>

          <div className="mb-3">
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="password">
              {" "}
              I agree with the terms & conditions.
            </label>
          </div>
        </form>
        <p>
           Already Have an Account? <Link to="/login">Login Here</Link>
        </p>

        {/* <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link> */}
      </div>
    </div>
  );
}

export default SignUp;
