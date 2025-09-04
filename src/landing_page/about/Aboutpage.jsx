// import React from 'react'

// function Aboutpage() {
//   return (
//     <div>
//         <h1>About</h1>
//     </div>
//   )
// }

// export default Aboutpage;
import React from "react";

function Aboutpage() {
  return (
    <div className="container py-5">
      <div className="row text-center mb-4">
        <h1>About stockUP</h1>
        <p className="text-muted">
          Empowering everyone to invest smarter and grow wealth with confidence.
        </p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Who We Are</h3>
          <p>
            stockUP is a modern stock trading and investment platform designed 
            for today’s investors. We aim to make financial markets more 
            accessible, transparent, and user-friendly for both beginners 
            and experienced traders. 
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h3>Our Mission</h3>
          <p>
            Our mission is simple — to help people grow their wealth by 
            providing the right tools, insights, and technology. We believe 
            investing should not be complicated or limited to experts. 
            At stockUP, everyone gets a fair chance to participate in the 
            stock market confidently.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <h3>What We Offer</h3>
          <ul>
            <li>Real-time stock tracking & insights</li>
            <li>Simple and transparent pricing</li>
            <li>Educational resources for beginners</li>
            <li>Secure & reliable trading experience</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h3>Why Choose Us</h3>
          <p>
            Unlike traditional platforms, stockUP focuses on simplicity and 
            innovation. Whether you want to start small or diversify your 
            portfolio, we give you the right tools to make smarter financial 
            decisions without overwhelming jargon or hidden charges.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <h4>At stockUP, we believe your financial journey should be 
          <span className="text-success"> simple, secure, and rewarding.</span>
        </h4>
      </div>
    </div>
  );
}

export default Aboutpage;
