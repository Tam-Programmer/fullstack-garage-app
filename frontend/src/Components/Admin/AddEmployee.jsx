import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    salary: "",
    phone: "",
    address: "",
    role: "",
  });

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      fname: employee.fname,
      lname: employee.lname,
      email: employee.email,
      password: employee.password,
      salary: employee.salary,
      phone: employee.phone,
      address: employee.address,
      role: selectedOption,
    };

    axios
      .post("http://localhost:3000/dashboard/add_employee", requestData)
      .then((result) => {
        if (result.data.status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="fname"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, fname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="lname"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, lname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="phone"
              className="form-control rounded-0"
              id="phone"
              placeholder="+251 1234 ..."
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, phone: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Role
            </label>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
