import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>Explore the StockUP Universe</h1>
        <p className="text-muted">
          Extend your trading and investing experience with tools built for
          learning, analysis, and growth.
        </p>

        {/* Card 1 */}
        <div className="col-md-4 p-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <i className="fa fa-book fa-3x mb-3 text-primary"></i>
              <h5>Learning Hub</h5>
              <p className="text-muted small">
                Bite-sized lessons to master trading and investments from
                scratch.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 p-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <i className="fa fa-bar-chart fa-3x mb-3 text-success"></i>
              <h5>Analytics Dashboard</h5>
              <p className="text-muted small">
                Track your portfolio performance with powerful insights and
                reports.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 p-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <i className="fa fa-users fa-3x mb-3 text-warning"></i>
              <h5>Community</h5>
              <p className="text-muted small">
                Connect with other traders, share ideas, and grow together.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className='p-2 btn btn-primary' style={{width:'20%',margin: "0 auto"}} >sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
