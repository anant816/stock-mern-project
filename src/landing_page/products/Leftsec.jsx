import React from 'react'

function Leftsec ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-bottom mb-5">
        <div className='row'>
            <div className='col-6 p-3'>
                <img src={imageURL}  />
            </div>
           <div className='col-6 '>
             <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a style={{textDecoration:"none"}} href={tryDemo}>try demo</a>&nbsp; &nbsp; &nbsp;
            <a style={{textDecoration:"none"}} href={learnMore}>learn more</a>&nbsp; &nbsp; &nbsp;
            <br /> <br />
            <a href={googlePlay}><img src="./media/Images/googlePlayBadge.svg" alt="" /></a> &nbsp; &nbsp; &nbsp;
            <a href={appStore}> <img src="./media/Images/appstoreBadge.svg" alt="" /></a>

           </div>
        </div>

    </div>
  )
};

export default Leftsec;