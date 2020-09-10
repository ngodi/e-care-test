import React from 'react';

import './SubHeader.css';


export default ({ image, heading, description}) => {
    return (
        <section style={{backgroundImage:`linear-gradient( rgba(0, 44, 156, 0.58), rgba(0, 44, 156, 0.58)), 
        url(${image})`}} className="the-height text-white mt-3 d-flex flex-column justify-content-center align-items-center">
            <div className="sub-nav">
                <span>Patient Care</span>
                <span>Doctors</span>
                <span>Hospitals</span>
                <span>About Us</span>
                <span>Contact Us</span>
            </div>
            <h1>
                { heading }
            </h1>
            <p>
                { description }
            </p>
            <img src='./Images/poweredby.png' className="poweredby-logo" alt="Powered By E-care" />
       </section>
    )
}