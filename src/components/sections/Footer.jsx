import React from 'react'
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";


const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <section id="footer">
                <div class="main-footer">
                    <div class="logoinfo" data-aos="fade-up">
                        <h2>ERP TECH</h2>

                        <div class="contact-details">
                            <h1>Contact Us</h1>
                            <li>
                                <div class="fa fa-phone"></div><a href="tel:+919326048690">+91 0987654321</a></li>
                            <li>
                                <div class="fa fa-envelope"></div><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></li>

                        </div>
                    </div>
                    <div class="com " data-aos="fade-up">
                        <h1>About</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Industry</a></li>
                            <li><a href="#">Courses</a></li>


                        </ul>
                    </div>
                    <div class="info" data-aos="fade-up">
                        <h1>Social Media</h1>
                        <div class="sociallogos">
                            <div class="logobox">
                                <a> <FaInstagram color='white' />
                                </a>
                                <a>  <FaLinkedinIn color='white' /> </a>
                                <a> <FaFacebookF color='white' /></a>
                                <a> <FaYoutube color='white' /></a>

                            </div>
                        </div>
                    </div>
                </div>
                <footer>© ERP TECH {getCurrentYear()} All Rights Reserved</footer>
            </section >



        </>

    )
}

export default Footer