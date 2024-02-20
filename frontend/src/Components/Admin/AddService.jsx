import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const [service, setService] = useState({
    service_name: "",
    description: "",
    service_icon: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("service_name", service.service_name);
    formData.append("description", service.description);
    formData.append("service_icon", service.service_icon);

    try {
      const response = await axios.post("http://localhost:3000/dashboard/add_service", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.Status) {
        navigate("/dashboard/service");
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "service_icon") {
      setService({
        ...service,
        service_icon: e.target.files[0],
      });
    } else {
      setService({
        ...service,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Service</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputService" className="form-label">
              Service Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputService"
              name="service_name"
              placeholder="Enter service"
              value={service.service_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-12 mb-2">
            <label htmlFor="inputDescription" className="form-label">
              Service Description
            </label>
            <textarea
              className="form-control rounded-0"
              rows="4"
              id="inputDescription"
              name="description"
              placeholder="service and repair"
              autoComplete="off"
              value={service.description}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Icon
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="service_icon"
              onChange={handleChange}
            />
          </div>
          <div className="col-12 ">
            <button type="submit" className="btn btn-primary w-100">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;