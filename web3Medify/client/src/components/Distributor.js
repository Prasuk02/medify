import React from 'react'
import "./distributor.css"

export default function Distributor() {
  return (
    <>

        <div className="container text-center setColor1">
            <div className="row mt-0">
                {/*LEFT SIDE*/}
                <div className="col-6 text-start my-auto px-5 py-4">
                <h1 className='text-center mb-4'>Distributing Medicine</h1>
                    <div className="row my-3">
                        <div class="col-md-6">
                            <label for="inputtype4" class="form-label">Medicine ID:</label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputtype4" class="form-label">Medicine Name:</label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div class="col">
                            <label for="inputtype4" class="form-label">Discription of Medicine:</label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div class="col">
                            <label for="inputtype4" class="form-label">Amount of Medicines:</label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                    </div>

                    <button className='btn btn-success mt-4 px-5 py-2'>Upload to IPFS</button>


                </div>

                {/*RIGHT SIDE*/}
                <div className="col">
                    <img class="im1" src={"images/distributor.jpg"}/>
                </div>
            </div>
        </div>
      </>
  )
}
