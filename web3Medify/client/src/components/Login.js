import React, { Component } from 'react'
import "./login.css";

export default function Login() {
  return (
    <>
    <div className='fluid'>
      <div className='setMargin'></div>
        <div className="container-md text-center d-flex align-items-center justify-content-center border colorDiv">
        <div className="row">
          <div className="col-6 text-start pt-5 border-end">
            <h1 className='text-center'>Login Members</h1> 
            <br/>
            <form className=' p-5'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label ms-2">Email address</label>
                    <input type="email" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text ms-2">Never share your secret code with anyone else.</div>
                </div>
                <br/>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label ms-2">Password</label>
                    <input type="password" class="form-control rounded-pill" id="exampleInputPassword1"/>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Sign In</button>
            </form>
          </div>
          
          <div className="col-6">
            <img className='d-flex align-items-center justify-content-center text-center' src={"images/login-img.png"}/>
          </div>
        </div>
      </div>
      <div className='setMargin'></div>
    </div>
    </>
  )
}
