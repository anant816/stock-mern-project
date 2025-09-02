// import React from "react";

// function Navbar() {
//   return (
//     <div className="container ">
//       <nav class="navbar bg-light border-bottom navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             <i className="fa fa-line-chart"></i>  stockUP
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               {/*  */}
//               <li class="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </a>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr class="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link disabled" aria-disabled="true">
//                   Disabled
//                 </a>
//               </li>
//             </ul>
            
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar bg-light border-bottom navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            <i className="fa fa-line-chart"></i> stockUP
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-primary" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
