import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./landing_page/home/Homepage";
import Signup from "./landing_page/sign up/signup";
import Aboutpage from "./landing_page/about/Aboutpage";
import Productspage from "./landing_page/products/Productspage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import Supportpage from "./landing_page/support/Supportpage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";


function App() {
  return (
    <>  
    <Navbar />                       
    <Routes>
      
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/products" element={<Productspage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/support" element={<Supportpage />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
     <Footer />
    </>
    
  );
}

export default App;

