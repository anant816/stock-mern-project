import React from 'react'

function Pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h1>unbeatable pricing</h1>
          <p>Our pricing model is designed to be straightforward and transparent, with no hidden fees or surprises.</p>
          <a style={{textDecoration:"none"}} href="">see pricing <i className="fa fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
          <div>
            <div className='row text-center'>
              <div className='col-6 border p-3'>
                <h1 className='mb-3'><i className="fa fa-inr"></i> 0</h1>

                <p>free equity delivery and direct mutual funds </p>

              </div>
              <div className='col-6 border p-3'>
                <h1 className='mb-3'><i className="fa fa-inr"></i>20</h1>
                <p>intraday f&q </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Pricing;