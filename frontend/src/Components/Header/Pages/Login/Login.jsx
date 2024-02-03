import React from "react";
// import axios from "axios";
import {Link} from 'react-router-dom'

function Login() {
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();
  // axios.defaults.withCredentials = true; // to store cookies
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/login", values)
      
  //     .then((res) => {
  //       if (res.data.Status === "Success") {         
  //         localStorage.setItem('LoggedIn', true);
  //           if (res.data.role === "admin") {
  //             navigate("/");
  //           } else if (res.data.role === "visitor") {
  //             navigate("/employee");
  //           } else {
  //             navigate("/dashboard");
  //           }
  //       } else {
  //         navigate("/register");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-auto">
        <h2>Login</h2>
        <form >
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
              
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p>Don&apos;t you have an account? <Link to="/register">Sign Up Here</Link> </p>
        {/* <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign Up
        </Link> */}
      </div>
    </div>
  );
}

export default Login;