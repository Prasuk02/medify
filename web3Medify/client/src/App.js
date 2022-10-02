import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Lottery from "./contracts/Lottery.json";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Manufacture from "./components/Manufacture";
import Distributor from "./components/Distributor";
import VerifyMed from "./components/VerifyMed";
import {Link, Routes,Route, BrowserRouter as Router} from "react-router-dom";

const App = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();

        const deployedNetwork = Lottery.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Lottery.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <>
    <Router>
      <nav class="navbar navbar-expand-lg bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Medify</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  DRA
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Add Manufacturer</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Add Distributors</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/Manufacture_Medicine">
                <a class="nav-link" href="#">Manufacturer</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Distribute_Medicine">
                <a class="nav-link" href="#">Distributor</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Verify_Medicine">
                <a class="nav-link" href="#">Verify Medicine</a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Find Medicine Retailers</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Report Fake Medicine</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">Connect to metamask</button>
            </form>
          </div>
        </div>
      </nav>
      

      <switch>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/Login"
        element={<Login/>}>
      </Route>
       
      <Route path="/Manufacture_Medicine"
        element={<Manufacture/>}>
      </Route>
      
      <Route path="/Distribute_Medicine"
        element={<Distributor/>}>
      </Route>
      <Route path="/Verify_Medicine" element={<VerifyMed/>}></Route>
        </Routes>
      
      
      
      </switch>

      </Router>
      
    </>
  );
};
export default App;
