import React from 'react'

function Education() {
 return (
    <div className='container'>
      <div className='row'>
        
        
        <div className='col-6 p-5'>
          <div>
            <img className='mt-5' src="/media/Images/education.svg" alt="" />
           
          </div>
        </div>

        <div className='col-6 p-5'>
          <h1 className='mt-5 fs-2'>free and open market education</h1>
          <p>versity,the largest online stock market book library, offers a wide range of resources to help you learn about investing and trading.</p>
          <a style={{textDecoration:"none"}} href="">versity <i className="fa fa-solid fa-arrow-right"></i></a>
          <br /><br />
          <p className='mt-5'>trading Q&A the largest online community for traders, offering real-time insights and support.</p>
          
          <a style={{textDecoration:"none"}} href="">trading Q&A <i className="fa fa-solid fa-arrow-right"></i></a>
        </div>

      </div>
      
    </div>
  )
}

export default Education;