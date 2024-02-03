import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
    // const [values, setValues] = useState({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
    // const navigate = useNavigate();
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios
    //     .post("http://localhost:3000/register", values)
    //     .then((res) => {
    //       if (res.data.Status === "Success") {
    //         navigate("/login");
    //       } else {
    //         alert("error");
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // };
  return (
    <div className="d-flex justify-content-center mt-5 container-fluid align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-auto">
        <h2>Sign Up</h2>
        <form >
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              // onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              name="name"
              autoComplete="off"
              placeholder="enter name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              // onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              name="email"
              autoComplete="off"
              placeholder="enter email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              // onChange={(e) =>
              //   setValues({ ...values, password: e.target.value })
              // }
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
        <p>Already Have an Account? <Link to="/login">Login Here</Link></p>

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
