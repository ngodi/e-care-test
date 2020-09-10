import React from 'react';

import './QuickLinks.css';
import CustomButton from '../Partials/CustomButton/CustomButton';

const quickLinks = [
    {
        text: "Medicines",
    },
    {
        text: "Firs tAid",
    },
    {
        text: "Nurses",
    },
    {
        text: "Hospital",
    },
    {
        text: "Care Tips",
    },
    {
        text: "SOS!",
    },
    {
        text: "Blood Bank",
    }
]
export default () => {
    return (
        <div className="quick-links">
            {
                quickLinks.map(({text}, i) => {
                    return (
                        <CustomButton buttonClass="quick-button" buttonText={text} key={i} />
                    )
                })
            }
        </div>
    )
}