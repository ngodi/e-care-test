import React from 'react'

import '../../../Page/HomePage/homepage.css';

import logo_facebook from "../../../Assets/homepage/Images/icons8_facebook.png";
import logo_instagram from "../../../Assets/homepage/Images/icons8_instagram.png";
import logo_linkedin from "../../../Assets/homepage/Images/icons8_linkedin.png";
import logo_twitter from "../../../Assets/homepage/Images/icons8_twitter.png";
import ecare_transp from "../../../Assets/homepage/Images/the.png";

const Footer = () => {
    return (
        <div>
            <div className="bg py-5">
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
                                        <a href="">
                                            <img
                                                src={logo_facebook}
                                                alt="facebook logo"
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                src={logo_instagram}
                                                alt="instagram logo"
                                                width="30"
                                                height="30"
                                                className="ml-4"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                src={logo_twitter}
                                                alt="twitter logo"
                                                width="30"
                                                height="30"
                                                className="ml-4"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img
                                                src={logo_linkedin}
                                                alt="linkedin logo"
                                                width="30"
                                                height="30"
                                                className="ml-4"
                                            />
                                        </a>
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
                    <div className="row text-white justify-content-center">
                        Copyright | 2020 E-Care
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
