import React, { Component } from 'react'

// IMPORTING LOGO
import Logo from '../../../Images/logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <img src={Logo} alt="logo" className="navbar-brand" />
                </nav>
            </div>
        )
    }
}
