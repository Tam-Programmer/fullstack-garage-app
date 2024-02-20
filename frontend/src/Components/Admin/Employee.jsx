import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5); // Number of employees per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/employee");
        if (response.data.Status) {
          setEmployee(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("http://localhost:3000/dashboard/delete_employee/" + id);
      if (response.data.Status) {
        window.location.reload();
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get current employees for pagination
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employee.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(employee.length / employeesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-success">
            {currentEmployees.map((emp) => (
              <tr key={emp.emp_id}>
                <td>{emp.firstname}</td>
                <td>{emp.lastname}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.role}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
                <td>
                  <Link to={`/dashboard/edit_employee/${emp.emp_id}`} className="btn btn-info btn-sm me-2">
                    <i className="bi bi-pencil-fill"> Edit</i>
                  </Link>
                  <button className="btn btn-warning btn-sm" onClick={() => handleDelete(emp.emp_id)}>
                    <i className="bi bi-trash-fill"> Delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={prevPage}>
              <span aria-hidden="true">&laquo;</span>
              <span className="visually-hidden">Previous</span>
            </button>
          </li>
          {Array(Math.ceil(employee.length / employeesPerPage))
            .fill()
            .map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          <li className={`page-item ${currentPage === Math.ceil(employee.length / employeesPerPage) ? "disabled" : ""}`}>
            <button className="page-link" onClick={nextPage}>
              <span aria-hidden="true">&raquo;</span>
              <span className="visually-hidden">Next</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Employee;