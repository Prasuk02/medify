import React, { PureComponent } from 'react'
import "./manufacture.css"

export default class Manufacture extends PureComponent {
  render() {
    return (
      <>
      <div className='fluid1'>
        <div className='setMargin1'></div>
        <div className="container text-center setColor1">
            <div className="row mt-5">
                {/*LEFT SIDE*/}
                <div className="col-6 text-start my-auto px-5 py-4">
                <h1 className='text-center mb-4'>Manufacturing Medicine</h1>
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

                    <div className="row my-3">
                        <div class="col-md-6">
                            <label for="inputtype4" class="form-label">Manufacturing Date: </label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputtype4" class="form-label">Expiry Date:</label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div class="col">
                            <label for="inputtype4" class="form-label">MRP:</label>
                            <input type="type" class="form-control" id="inputtype4"/>
                        </div>
                    </div>

                    <button className='btn btn-success mt-4 px-5 py-2'>Upload to IPFS</button>


                </div>

                {/*RIGHT SIDE*/}
                <div className="col">
                    <img class="homeImage" src={"images/manufacture_newMed.jpg"}/>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }
}
