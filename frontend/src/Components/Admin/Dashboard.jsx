import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get("http://localhost:3000/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("LoggedIn");
          localStorage.removeItem("Role"); // Clear the role from localStorage
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid dash1">
      <div className="row flex-nowrap dash2">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Abe Garage
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Employees</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/add_employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 <i bi bi-person-plus-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Add Employee</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/customer"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 <i bi bi-people-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Customers</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/add_customer"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 <i bi bi-person-plus-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Add Customer</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/services"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-tools"></i>
                  <span className="ms-2 d-none d-sm-inline">Services</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/add_services"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-plus-circle-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Add Services</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/order"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-cart4"></i>
                  <span className="ms-2 d-none d-sm-inline">Orders</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/add_order"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-cart-plus-fill"></i>
                  <span className="ms-2 d-none d-sm-inline">Add Order</span>
                </Link>
              </li>

              <li className="w-100" onClick={handleLogout}>
                <Link to="/" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi bi-box-arrow-right"></i>
                  <span className="ms-2 d-none d-sm-inline"> Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Garage Management System</h4>
            {/* <li className="w-100" onClick={handleLogout}>
              <Link to="/" className="nav-link px-0 align-middle text-white">
                <i className="fs-4 bi-power ms-2"></i>
                <span className="ms-2 d-none d-sm-inline bg-warning">Logout</span>
              </Link>
            </li> */}
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
