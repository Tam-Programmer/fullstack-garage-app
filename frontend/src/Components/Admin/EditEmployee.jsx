import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams(); // to get a parameter (id) from the URL
  const [employee, setEmployee] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    salary: '',
    address: '',
    role: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/dashboard/employee/' + id)
      .then((result) => {
        // const employeeData = result.data.Result; //can not populate the form if is is not like the one below (array)
        const employeeData = result.data.Result[0];
        if (employeeData) {
          setEmployee({
            fname: employeeData.firstname,
            lname: employeeData.lastname,
            email: employeeData.email,
            phone: employeeData.phone,
            salary: employeeData.salary,
            address: employeeData.address,
            role: employeeData.role,
          });
        } else {
          console.log('Employee data not found');
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a role is selected
    if (!employee.role) {
      alert('Please select a role');
      return;
    }

    axios
      .put('http://localhost:3000/dashboard/edit_employee/' + id, employee)
      .then((result) => {
        if (result.data.Status) {
          navigate('/dashboard/employee');
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="fname"
              placeholder="Enter First Name"
              value={employee.fname}
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
              placeholder="Enter Last Name"
              value={employee.lname}
              onChange={(e) =>
                setEmployee({ ...employee, lname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              placeholder="Enter Email"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control rounded-0"
              id="phone"
              placeholder="Enter Phone Number"
              value={employee.phone}
              onChange={(e) =>
                setEmployee({ ...employee, phone: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="salary"
              placeholder="Enter Salary"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control rounded-0"
              id="address"
              placeholder="Enter Address"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            ></textarea>
          </div>
          <div className="col-12">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              className="form-select rounded-0"
              id="role"
              value={employee.role}
              onChange={(e) =>
                setEmployee({ ...employee, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;