import React from "react";
import { Switch, Route } from 'react-router-dom';
import * as $ from "jquery";
import "slick-carousel";

import Booking from './Components/Booking/Booking';
// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";

import brain from "./Images/carousel-brain.png";
import heart from "./Images/carousel-heart.png";
import orthopaedic from "./Images/carousel-orthopaedic.png";
import robotics from "./Images/carousel-robotics.png";
import pharm from "./Images/carousel-pharm.png";
import article1 from "./Images/article-1.png";
import arcticle2 from "./Images/article-2.png";
import article3 from "./Images/article-3.png";
import healthtips01 from "./Images/healthtips01.png";
import healthtips02 from "./Images/healthtips02.png";
import logo_facebook from "./Images/icons8_facebook.png";
import logo_instagram from "./Images/icons8_instagram.png";
import logo_linkedin from "./Images/icons8_linkedin.png";
import logo_twitter from "./Images/icons8_twitter.png";
import ecare_transp from "./Images/ecare-transparent.png";

// IMPORTING NAVBAR
import PublicNav from "./Components/Partials/PublicNav/PublicNav";
import Emergency from "./pages/Emergency/Emergency";


function App() {
  return (
    <div className="App">
      <PublicNav />
      <Emergency />
         <div className="bg-success py-5">
        <footer className="container">
          <div className="row">
            <h3 className="col text-white">E-Care</h3>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <ul className="col list-unstyled">
              <li className="font-weight-bold my-3 text-white">INFORMATION</li>
              <li className="py-2">
                <a href="#" className="text-white">
                  About us
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  Contact us
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  Terms and Conditions
                </a>
              </li>
            </ul>
            <ul className="col list-unstyled">
              <li className="font-weight-bold my-3 text-white">
                RESPONSE LINKS
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  Careers
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  Offers
                </a>
              </li>
            </ul>
            <ul className="col list-unstyled">
              <li>
                <ul className="list-unstyled d-flex justify-content-around justify-content-md-start">
                  <li>
                    <img
                      src={logo_facebook}
                      alt="facebook logo"
                      width="30"
                      height="30"
                    />
                  </li>
                  <li>
                    <img
                      src={logo_instagram}
                      alt="instagram logo"
                      width="30"
                      height="30"
                      className="ml-4"
                    />
                  </li>
                  <li>
                    <img
                      src={logo_twitter}
                      alt="twitter logo"
                      width="30"
                      height="30"
                      className="ml-4"
                    />
                  </li>
                  <li>
                    <img
                      src={logo_linkedin}
                      alt="linkedin logo"
                      width="30"
                      height="30"
                      className="ml-4"
                    />
                  </li>
                </ul>
              </li>
              <li className="mt-3 mt-lg-0 d-flex flex-column flex-lg-row justify-content-around justify-content-lg-start align-items-center">
                <span className=" text-white d-inline-block">Powered by</span>
                <img
                  src={ecare_transp}
                  alt="ecare logo"
                  className="d-inline-block"
                />
              </li>
            </ul>
          </div>
          <hr className="bg-white" />
          <div className="row justify-content-center">
            Copyright | YYYY E-Care
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
