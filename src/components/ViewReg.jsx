import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewReg = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json"
      )
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Runs only once

  return (
    <div>
      <NavBar />

      <center>
        <h2>View Student Details</h2>
      </center>

      <div className="container">
        <div className="row g-3">
          {data.map((value, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-4"
            >
              <div className="card h-100 shadow border-0 rounded-4">
                <div className="card-body">
                  <h4
                    className="fw-bold text-center mb-3"
                    style={{ color: "#08b179" }}
                  >
                    {value.fullName}
                  </h4>

                  <p className="card-text">
                    <strong>Registration No :</strong> {value.regNo}
                    <br />
                    <strong>Branch :</strong> {value.branch}
                    <br />
                    <strong>SSLC Mark :</strong> {value.sslcMark} %
                    <br />
                    <strong>Plus Two Mark :</strong> {value.plusTwoMark} %
                    <br />
                    <strong>UG Mark :</strong> {value.ugMark} %
                    <br />
                    <strong>PG Mark :</strong>{" "}
                    {value.pgMark ? `${value.pgMark} %` : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewReg;