import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Styles.css'

const Service = () => {
  const [service, setService] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(5); // Number of services per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/service");
        if (response.data.Status) {
          setService(response.data.Result);
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
      const response = await axios.delete("http://localhost:3000/dashboard/delete_service/" + id);
      if (response.data.Status) {
        window.location.reload();
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get current services for pagination
  const indexOfLastEmployee = currentPage * servicesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - servicesPerPage;
  const currentServices = service.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(service.length / servicesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(Math.ceil(service.length / servicesPerPage));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Services List</h3>
      </div>
      <Link to="/dashboard/add_service" className="btn btn-success">
        Add Service
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Service Name</th>
              <th>Service Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentServices.map((serv) => (
              <tr key={serv.serv_id}>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + serv.service_icon}
                    className="service_icon"
                  />
                </td>
                <td>{serv.service_name}</td>
                <td>{serv.description}</td>
                
                <td className="d-flex">
                  <Link to={`/dashboard/edit_service/${serv.serv_id}`} className="btn btn-info btn-sm me-1">
                    <i className="bi bi-pencil-fill"> Edit</i>
                  </Link>
                  <button className="btn btn-warning btn-sm" onClick={() => handleDelete(serv.serv_id)}>
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
            <button className="page-link" onClick={firstPage}>
              First
            </button>
          </li>
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={prevPage}>
              Prev
            </button>
          </li>
          <li className={`page-item ${currentPage === Math.ceil(service.length / servicesPerPage) ? "disabled" : ""}`}>
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
          <li className={`page-item ${currentPage === Math.ceil(service.length / servicesPerPage) ? "disabled" : ""}`}>
            <button className="page-link" onClick={lastPage}>
              Last
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;