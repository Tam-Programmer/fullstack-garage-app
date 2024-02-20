import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../Admin/Styles.css";

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
      <div className="d-flex justify-content-center">
        <h2>Services </h2>
      </div>
      <div className="mt-3">
        <table className="table">
          <tbody>
            <div className="d-flex">

              
              {service.map((serv) => (
                <tr key={serv.serv_id}>
                  <div>
                  <p>Services & Repairs</p>
                    <td>
                      <h4>{serv.service_name}</h4>
                    </td>
                  </div>

                  <div className="d-flex">
                    <td>
                      <Link
                        to={`/dashboard/edit_service/${serv.serv_id}`}
                      >
                        <p> Read More +</p>
                      </Link>
                    </td>
                    <td>
                   <img src={`http://localhost:3000/Images/` + serv.service_icon}
                      alt="Service Icon"
                      style={{ width: "50px", height: "50px" }} />
                    </td>
                  </div>
                </tr>
              ))}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
