import React from 'react'
import "./verify.css"

export default function verify() {
  return (
    <>
        {/*<div className='container-md setBG'>
          <img className='im3' src={'images/verify_img.png'}/>
        </div>
        <div>
          
          
          <input class="QR" type="text" placeholder='Upload the QR'/>
  </div>*/}



      <div className='container'>
      <div className="row hi">
          <div className="col-6 text-start my-auto">
            <h1 className='mainHeading'>QR CODE VERIFICATION</h1>
            <p className='mainPara'>You can upload the QR code bellow or just simply scan with mobile.</p>
            <input class="QR" type="text" placeholder='Upload the QR'/>
            <br/>
            <button type="button" className='btn mainBtn px-4 py-2 my-4 ver'>Verify Medicine</button> 
            
          </div>

          <div className="col">
            <img src={"images/OR.png"}/>
          </div>
        </div>
      </div>
    </>
  )
}
