import React from 'react';

import './AvailableDoctors.css';

const doctorList = [
    {
      star: true,
      photo: "./Images/drharry.png",
      name: "Dr. Harry Franklin",
      sector: "Neurologist",
      hospital: " St. vancia Hospital"
    },
    {
    star: true,
    photo: "./Images/drharry.png",
    name: "Dr. Harry Franklin",
    sector: "Neurologist",
    hospital: " St. vancia Hospital"
    },
    {
    star: true,
    photo: "./Images/drharry.png",
    name: "Dr. Harry Franklin",
    sector: "Neurologist",
    hospital: " St. vancia Hospital"
    },
    {
    star: true,
    photo: "./Images/drharry.png",
    name: "Dr. Harry Franklin",
    sector: "Neurologist",
    hospital: " St. vancia Hospital"
    },
    {
    star: true,
    photo: "./Images/drharry.png",
    name: "Dr. Harry Franklin",
    sector: "Neurologist",
    hospital: " St. vancia Hospital"
    }
]
export default () => {
   return (
       <div className="available-doctors">
           <div className="heading">Doctors Available</div>
           <div className="available-doctors-list">
            {
                doctorList.map(({star, photo, name, sector, hospital}, i) => {
                    return (
                        <div className="doctor-thumb">
                            {(star === true)?<img src="./Images/star1.png" alt="Doctor star" /> : ""}
                            <img src={photo}  alt="Doctor Photo"/>
                            <div className="doctor-details">
                                <span className="doctor-name">{name}</span>
                                <span>{sector}</span>
                                <span>{hospital}</span>
                            </div>
                      </div>
                    )
                })
            }
           </div>
       </div>
   )
}