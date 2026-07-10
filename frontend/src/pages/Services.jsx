import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {

  const navigate = useNavigate();

  const services = [
    "Nursing Care",
    "Physiotherapy",
    "Personal Care",
    "Medical Assistance"
  ];

  return (

    <div className="service-container">

      <h1>Healthcare Services</h1>

      {services.map((service,index)=>(

        <div
          className="service-card"
          key={index}
        >

          <h3>{service}</h3>

          <button
            onClick={() =>
              navigate(
                `/book/${service}`
              )
            }
          >
            Book Now
          </button>

        </div>

      ))}

    </div>

  );
}

export default Services;