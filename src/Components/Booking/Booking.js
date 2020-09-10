import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'

import CustomButton from '../Partials/CustomButton/CustomButton';

import poweredby from "../../Images/poweredby.png";
import success from "../../Images/success.png";
import formback from "../../Images/form-back.png";
import close from "../../Images/close.png";

import './Booking.css';
const timeslots = new Array(20).fill("10 A.M");
class Booking extends Component {
   constructor(props) {
      super(props);
      this.handleDayClick = this.handleDayClick.bind(this);
      this.handleNext = this.handleNext.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        selectedDay: undefined,
        currentForm: 0,
        selectedTime: undefined,
        selectOptions : {
           category : "",
           reason: "",
           doctor: ""
        }
      };
    }
  
    handleDayClick = (day) => {
      this.setState({ selectedDay: day });
    }
    handleNext = () => {
      this.setState({currentForm: this.state.currentForm + 1})
    }
    handleChange = (event) => {
      this.setState({selectOptions: {[event.target.name]: event.target.value}});
    }
   handleClose = (e) => {
      this.props.history.push("/");
   }
    render() {
     return(
        <div className="booking-container" >
           <div className="booking" style={{ backgroundImage: `url(${formback})`}}>
             <div className="close" onClick={this.handleClose }><img src={close} alt="close button" /></div>
              <div className="booking-right">
                 {
                 this.state.currentForm === 0 && 
                  <div className="booking-right-top">
                     <h3 className="booking-heading">Pick a Date</h3>
                     <div className="booking-main">
                        <DayPicker
                        onDayClick={this.handleDayClick}
                        selectedDays={this.state.selectedDay}
                        />
                     </div>
                  </div>
                 }
                 {
                  this.state.currentForm === 1 && 
                  <div className="booking-right-top">
                     <h3 className="booking-heading">Pick a Time</h3>
                     <div className="booking-timeslots">
                     {
                        timeslots.map((data, i) => (
                           <CustomButton 
                              key = {i}
                              buttonClass="time-button" 
                              buttonColor="gray-back" 
                              textColor="white-text"
                              buttonText = {data}
                           >               
                        </CustomButton>
                       ))
                     }
                     </div>
                  </div>
                 }
                  {
                  this.state.currentForm === 2 && 
                  <div className="selectForm booking-right-top">
                     <h3 className="booking-heading">Pick a Doctor</h3>
                     <div className="booking-main">
                        <select name="category" onChange={this.handleChange} value={this.state.selectOptions["category"]}>
                           <option value="Orthopedic">Orthopedic</option>
                        </select>
                        <select name="reason" onChange={this.handleChange} value={this.state.selectOptions["reason"]}>
                           <option value="Consultation">Consultation</option>
                        </select>
                        <select name="doctor" onChange={this.handleChange} value={this.state.selectOptions["doctor"]}>
                           <option value="any">Any</option>
                        </select>
                     </div>
                 </div>
               }
                   {
                  this.state.currentForm === 3 && 
                  <div className="selectForm booking-right-top">
                     <h3 className="booking-heading">Pick a Date</h3>
                     <div className="booking-main">
                        <img width="200px" alt="success Icon" src={success}/>
                        <p>Thanks for booking you now have an appointment with Dr Nicholas  at 10 AM</p>
                     </div>
                  </div>
                 }
                 <div className="formButton" onClick = {this.handleNext} >
                     <CustomButton 
                        buttonClass="form-button" 
                        buttonColor="green-back" 
                        textColor="white-text"
                        buttonText = {(this.state.currentForm === 3)? <Link to="/">Finish</Link>:"Next"}
                        >               
                     </CustomButton>
                  </div>
                <div className="booking-right-bottom">
                   <img width="150px" alt="eCare Logo" src={poweredby}/>
                </div>
             </div>
         </div>
        </div>
     )
   }
}


export default withRouter(Booking);