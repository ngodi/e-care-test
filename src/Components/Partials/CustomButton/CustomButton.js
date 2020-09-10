import React from 'react';
import './CustomButton.css';

const CustomButton = ({buttonClass, buttonText, buttonColor, textColor}) => {
    return (
       <button className={`${buttonClass} ${buttonColor} ${textColor}`}>
         {buttonText}
       </button>
    )
}

export default CustomButton;