import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-4 pb-4">
      <div className="container">
        <div className="row">
          {/* Logo + tagline */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">
              <i className="fa fa-line-chart"></i> stockUP
            </h5>
            <p className="text-muted small">
              Grow your wealth with smart stock insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Home</a></li>
              <li><a href="#" className="text-decoration-none text-muted">About</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Support</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Products</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Stock Analysis</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Premium Plan</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Help Center</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className="text-center mt-3">
          <small className="text-muted">© {new Date().getFullYear()} stockUP. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
