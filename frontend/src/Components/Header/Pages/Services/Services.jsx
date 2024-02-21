import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../Admin/Styles.css";
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/dashboard/service"
        );
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

  return (
    <div className="px-5 mt-3">
      <div className="container">
        <br />
        <br />
        <h2>Our Services</h2>
        <p>
          Bring to the table win-win survival to ensure proactive dominations.
          At the end of the day, going forward, a new normal that has evolved
          from generation X is on the runway heading towards a streamlined cloud
          solutions.
        </p>
        <ul className="cards">
          {service.map((serv) => (
            <li key={serv.serv_id} className="card">
              <div>
                <p>Services & Repairs</p>
                <h3 className="card-title">{serv.service_name}</h3>
                <div className="card-content">
                  <div className="d-flex gap-4">
                    <div className="card-link-wrapper">
                      <Link
                        to={`/dashboard/edit_service/${serv.serv_id}`}
                        className="card-link"
                      >
                        Read More +
                      </Link>
                    </div>
                    <div>
                      <img
                        src={
                          `http://localhost:3000/Images/` + serv.service_icon
                        }
                        alt="Service Icon"
                        style={{
                          width: "75px",
                          height: "60px",
                          paddingLeft: "10px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
