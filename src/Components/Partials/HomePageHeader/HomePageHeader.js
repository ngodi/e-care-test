import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./HomePageHeader.css";

class HomePageHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="hero-image">
          <ul className="nav justify-content-center py-3 hero__top-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Patient care
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Doctor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Hospitals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="hero-mid-text">
            <h1>Book an appointment</h1>
            <p>Reach out to our doctors or build your appointment right away</p>
            <Link to='/booking'>
               <button className="btn btn-danger px-3">Book now</button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default HomePageHeader;
