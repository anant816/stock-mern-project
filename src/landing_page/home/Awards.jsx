import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src="/media/Images/largestBroker.svg" alt="info" />
        </div>

        <div className='col-6 p-5'>
          <h1>India's Best Stock Broker</h1>
          <p>2+ million people trusted us and started trading and investing with us.</p>
          <div className='row'>
            <div className='col-6 p-3 '>
              <ul>
                <li>features and options</li>
                <li>low brokerage fees</li>
                <li>advanced trading tools</li>
              </ul>

            </div>
            <div className='col-6 p-3'>
              <ul>
                <li>stocks&trades</li>
                <li>mutual funds</li>
                <li>safe and secure</li>
              </ul>

            </div>
          </div>
          <img src="/media/Images/pressLogos.png" alt="" style={{ width: "80%"}} />
        </div>
        
      </div>

    </div>
  )
}

export default Awards;
