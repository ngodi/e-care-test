import React from 'react';

import './CovidOverview.css';
import CustomButton from '../CustomButton/CustomButton';

export default () => {
    return (
        <div className="covid-overview">
            <div className="corona-logo"><img src="./Images/corona-logo.png" width="250px"/><p>INDIA</p></div>
            <div className="total-cases">TOTAL CASES <p>2836926</p></div>
            <div className="active-cases">ACTIVE CASES <p>686395</p></div>
            <div className="recovered">RECOVERED <p>2096664</p></div>
            <div className="deaths">DEATHS <p>53866</p></div>
           <CustomButton  buttonClass="know-more" buttonText="Know More" />
        </div>
    )
}