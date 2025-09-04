import React from 'react';
import Herosec from './Herosec';
import Leftsec from './Leftsec';
import Rightsec from './Rightsec';
import Universe from './Universe';

function Productspage() {
  return (
    <>
      <Herosec />
      <Leftsec
        imageURL="/media/Images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""           
      />
      <Rightsec 
      imageURL="/media/Images/console.png"
        productName="Console"
        productDescription="The central dashboard for your account. Gain insights into your trades and investments with in-depth reports and visualisations."
         learnMore=""
      />
      <Leftsec
        imageURL="/media/Images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <Rightsec 
      imageURL="/media/Images/kiteconnect.png"
        productName="Kite Connect"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
         learnMore=""
      />
       <Leftsec
        imageURL="/media/Images/varsity.png"
        productName="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />

    </>
  );
}

export default Productspage;




// import React from 'react'

// function Products() {
//   return (
    
//     <div className='p-5 '>
//         <h1>technology</h1>
//         <h3>sleek,modern and user-friendly</h3>
//         <p>check out our  <a style={{textDecoration:"none"}} href="">investment offering <i className="fa fa-solid fa-arrow-right"></i></a></p>
//     </div>
    
//   )
// }

// export default Products;




// import React from "react";

// import Herosec from "./Herosec";
// import Leftsec from "./Leftsec";
// import Rightsec from "./Rightsec";
// import Universe from "./Universe";

// function Productspage() {
//   return (
//     <>
//       <Herosec />
//       {/* <Leftsec
//         imageURL="media/images/kite.png"
//         productName="Kite"
//         productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <Rightsec
//         imageURL="media/Images/console.png"
//         productName="Console"
//         productDescription="The central dashboard for your account. Gain insights into your trades and investments with in-depth reports and visualisations."
//         learnMore=""
//       />
//       <Leftsec
//         imageURL="media/Images/coin.png"
//         productName="Coin"
//         productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       />
//       <Rightsec
//         imageURL="media/Images/kiteconnect.png"
//         productName="Kite Connect API"
//         productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
//         learnMore=""
//       />
//       <Leftsec
//         imageURL="media/Images/varsity.png"
//         productName="Varsity mobile"
//         productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
//         tryDemo=""
//         learnMore=""
//         googlePlay=""
//         appStore=""
//       /> */}
//       <p className="text-center mt-5 mb-5">
//         Want to know more about our technology stack? Check out our tech blog.
//       </p>
//       {/* <Universe /> */}
//     </>
//   );
// }

// export default Productspage;
