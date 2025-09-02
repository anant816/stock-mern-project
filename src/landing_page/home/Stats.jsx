import React from 'react'

function Stats() {
  return (
    <div className='container p-5 '>
      <div className='row p-5' >
        <div className='col-6 p-5'>
          <h2>Grow with Trust</h2>
<p className='fs-5'>We believe in building long-term relationships, not just transactions. That’s why our platform is designed to be transparent, reliable, and customer-focused from day one.</p>

<h2 className='fs-4'>Simple & Powerful Tools</h2>
<p className=' text-muted'>No unnecessary complexity. Just clean, easy-to-use tools that help you make informed decisions at your own pace—without distractions or gimmicks.</p>

<h2 className='fs-4'>An Ecosystem That Works for You</h2>
<p className=' text-muted'>Beyond a single app, we provide a connected ecosystem tailored to your needs. From insights to solutions, everything is designed to help you grow smarter.</p>

<h2 className='fs-4'>Helping You Succeed</h2>
<p className='text-muted'>Our mission goes beyond providing services—we aim to guide, support, and empower you to achieve your goals with confidence and clarity.</p>

        </div>
         <div className='col-6 p-5'><img src="/media/Images/ecosystem.png" alt="" style={{width: "75%"}} />
          <div className='text-center'><a style={{textDecoration:"none"}} href="">explore our products <i className="fa fa-solid fa-arrow-right"></i></a>
        
         </div>
         </div>
        
      </div>
      
    </div>
  )
}

export default Stats;