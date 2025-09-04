import React from 'react'

function Rightsec({
    imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
     <div className="container border-bottom mb-5">
        <div className='row'>
            <div className='col-6 p-3'>
                <h1>{productName}</h1>
            <p>{productDescription}</p>
            
            <a style={{textDecoration:"none"}} href={learnMore}>learn more</a>
            

                

                
            </div>
           <div className='col-6 '>
            <img src={imageURL}  />
             
           </div>
        </div>

    </div>
  )
}

export default Rightsec;