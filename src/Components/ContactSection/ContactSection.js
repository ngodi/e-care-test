import React from 'react';

import CustomButton from '../Partials/CustomButton/CustomButton';

import './ContactSection.css';

export default () => {
    return (
        <div className="contact">
            <div className="heading">Fast Chat Nurses and medical staffs</div>
          <div className="contact-section" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)), url(./Images/healthtips02.png)`}}>
            <div className="contact-form">
                <input value="Full Name" type="text" name="first-name" />
                <input value="Email" type="text" name="email" />
                <textarea value="Message Us" className="message-area" name="message-area" rows="4" cols="100"></textarea>
                <CustomButton  buttonClass="send-message" buttonText="Send" />
            </div>
            <div className="contact-side-text">
               <h3>Advices</h3>
               <p>Dentistry is the art of treating, diagnosing, and preventing diseases of the jaws, teeth, and surrounding tissues of our mouth. Dental treatment includes a wide range of dental services. Some of these services are based on correcting problems of the teeth caused mainly by dental decay. Such treatments often involves the use of some kind of dental fillings.</p>
               <div className="adviser">
                   <img src="./Images/drharry.png" alt="..." />
                   <div>
                        <h4>Sister Dorothy</h4>
                        <h5>Vatican Medical College</h5>
                   </div>
               </div>
            </div>
        </div>
    </div>
    )
}