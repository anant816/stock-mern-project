import React from "react";

function Herosec() {
  return (
    <section
      className="container-fluid text-white"
      style={{ backgroundColor: "#007BFF" }} // Blue background
      id="supportHero"
    >
      {/* Top wrapper */}
      <div className="p-4 d-flex justify-content-between align-items-center" id="supportWrapper">
        <h4 className="m-0">📩 StockUP Support Portal</h4>
        <a href="#" className="text-white fw-bold" style={{ textDecoration: "underline" }}>
          Track Tickets
        </a>
      </div>

      {/* Main content */}
      <div className="row p-5 m-3">
        {/* Left Side */}
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control mb-3"
            placeholder="Eg. how do I activate F&O"
            style={{ maxWidth: "400px" }}
          />
          <div className="d-flex flex-column gap-2">
            <a style={{textDecoration:"none"}} href="#" className="text-white">📄 Track account opening</a>
            <a style={{textDecoration:"none"}} href="#" className="text-white">📊 Track segment activation</a>
            <a style={{textDecoration:"none"}} href="#" className="text-white">💰 Intraday margins</a>
            <a style={{textDecoration:"none"}} href="#" className="text-white">📘 StockUP user manual</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">⭐ Featured</h1>
          <ol className="fs-5">
            <li>
              <a style={{textDecoration:"none"}} href="#" className="text-white">
                Current Takeovers and Delisting - September 2025
              </a>
            </li>
            <li>
              <a style={{textDecoration:"none"}} href="#" className="text-white">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Herosec;
