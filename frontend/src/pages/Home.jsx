import React from "react";

function Home() {
  return (
    <div>

      <section className="hero">

        <h1>
          Elderly Nursing & Healthcare Assistant Platform
        </h1>

        <p>
          Trusted caregivers and healthcare support
          for elderly people at home.
        </p>

        <button>Book Caregiver</button>

      </section>

      <section className="services">

        <h2>Our Services</h2>

        <div className="card">
          <h3>Nursing Care</h3>
          <p>Professional nursing at home.</p>
        </div>

        <div className="card">
          <h3>Elderly Attendant</h3>
          <p>Daily assistance and support.</p>
        </div>

        <div className="card">
          <h3>Physiotherapy</h3>
          <p>Home physiotherapy services.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;