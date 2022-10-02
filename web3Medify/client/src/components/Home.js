import React from 'react'
import "./home.css"

export default function Home() {
  return (
    <>
        {/* row - 1 */}
      <div className="container-fluid mb-4">
        <br/>
        <div className="row">
            <div className="col-6"></div>
            <div className="col text-end">
              <p>Connected account : </p>
            </div>
          </div>
      </div>
    
     
      {/* row -2 */}
      <div className="container text-center">
        <div className="row">
          <div className="col-6 text-start my-auto">
            <h5 className='heading1 fs-6'>FOR THE FIRST TIME EVER MEDICINE VERIFICATION MADE POSSIBLE</h5>
            <h1 className='mainHeading'>LET'S HAVE A SECURE &amp; TRUSTED MEDICAL INDUSTRY</h1>
            <p className='mainPara'>Medify is a blockchain based web application which helps customer to authenticate their Medicines and it's details .</p>
            <button type="button" className='btn mainBtn px-4 py-2 my-2'>Verify Medicine</button> 
          </div>
          <div className="col">
            <img className='' class="homeImage" src={"images/home-img.jpg"}/>
          </div>
        </div>
      </div>
        
        {/* row - 3 */}
      <br/>
      <div className='container-fluid colorChange my-5 pb-5'>
        
        <br/>
        <div className="row mt-3 pt-3 justify-content-md-center">
            <div className="col-6 text-center">
              <h2>Steps To Verify Medicine</h2>
            </div>
        </div>

        <div className="row my-4 justify-content-md-center ">
          <div className="col-3 mt-5 mx-4 p-2 pb-5 border rounded-3 colColor">
            <h1 className='text-start stepHead'>01</h1>
            <img className='mb-3 mx-2 Image' src={'images/buying_med-home.jpg'}/>
            <h5 className='stepHeading mb-3 text-center'>Visting &amp; Buying of Medicine</h5>
            <p className='stepText px-3'>Consumer can visit any nearest Pharmacy or Hospital to buy the required/prescribed medicine. </p>
          </div>
          
          <div className="col-3 mx-4 p-2 ">
            <div className="border p-2 pb-0 rounded-3 colColor">
              <h1  className='text-start stepHead'>02</h1>
              <img className='mb-3 text-center' src={'https://rockstheme.com/rocks/lotogame-live/img/about/h2.png'}/>
              <h5 className='stepHeading mb-3 text-center'>Enter the Special code</h5>
              <p className='stepText mb-5 px-3'>Before buying the medicine, type the special code printed on packet to our website 'verify medicine' portal.</p>
            </div>
          </div>
          
          <div className="col-3 mt-5 mx-4 p-2 border rounded-3 colColor">
            <h1 className='text-start stepHead'>03</h1>
            <img className='mb-3 text-center' src={'https://rockstheme.com/rocks/lotogame-live/img/about/h3.png'}/>
            <h5 className='mb-3 stepHeading text-center'>Scan the QR code &amp; Verify</h5>
            <p className='stepText px-3'>Scan the QR code generated on the portal, and wait the for magic to happen... TADA here's the details</p>
          </div>
        </div>
      </div>
        {/* row - 4 */}
      <div className='container'>
        <br/><br/>
        <div className="row mb-5">
          <div className="col-6 m-auto mb-5">
            <img className='Image' src={"images/feature-home.jpg"}/>
          </div>

          <div className="col-6 ps-4 mb-5">
            <h1 className='text-start stepHeading'>Medify Provides Highly Secure Application</h1>
            <p className='text-start mt-3 securePara'>Medify uses blockchain technology for tapping into the whole process of drugs and medical products movement</p>
            <h5 className='my-4 features'>FEATURES OF MEDIFY</h5>
            <ol class="list-group list-group-horizontal ">
              <li class="list-group-item">End-to-end traceability of health products</li>
            </ol>
            <ol class="list-group list-group-horizontal ">
              <li class="list-group-item">Reduced the number of counterfeit drugs</li>
            </ol>
            <ol class="list-group list-group-horizontal ">
              <li class="list-group-item">Increases transparency to enhance accountability</li>
            </ol>
            <ol class="list-group list-group-horizontal ">
              <li class="list-group-item">Efficient recall management</li>
            </ol>
          </div>
        </div>
      </div>

      {/* row - 4 */}
      <div className='container-fluid colorChange'>
      <div className="row pt-3 justify-content-md-center">
            <div className="col-6 mt-5 mb-2">
              <h2 className='stepHeading text-center'>About Medify and it's Objective</h2>
              <p class="text-center chooseMainPara">Medify is blockchain based web application, for the first time which helps customers to verify their medicines and check the complete details before buying. The objective of medify is to provide transaprency to the medical supply chain.</p>
            </div>
      </div>
      </div>
    </>
  )
}
