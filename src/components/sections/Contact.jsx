import React, { useEffect, useRef } from 'react'
import '../../styles/contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const inputRefs = useRef([]);

  useEffect(() => {
    const handleFocus = (e) => {
      e.target.parentNode.classList.add("focus");
    };

    const handleBlur = (e) => {
      if (e.target.value === "") {
        e.target.parentNode.classList.remove("focus");
      }
    };

    // Add event listeners to each input field
    inputRefs.current.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    // Cleanup event listeners on component unmount
    return () => {
      inputRefs.current.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

    return (
        <> 
            <section className="contact-container" id='contact'>
                <div>
                    {/* <span className="big-circle"></span>
                    <img src="img/shape.png" className="square" alt="" /> */}
                    <div className="form">
                        <div className="contact-info">
                            <h3 className="title">We're Here to Help</h3>
                            <p className="text">
                            Have questions? Our team is ready to provide the support you need.
                            </p>

                            <div className="info">
                                <div className="information">
                                    <p> <FaLocationDot/> ERP Tech
                                    75-76/3B, 3rd floor, Dr. Radhakrishnan Road, Tatabad, Near Six Corner, Gandhipuram, Coimbatore - 641012</p>
                                </div>
                                <div className="information">
                                    <p><MdEmail /> erptech@gmail.com</p>
                                </div>
                                <div className="information">
                                   <FaPhoneAlt/>
                                    <p>123-456-789</p>
                                </div>
                            </div>

                            <div className="social-media">
                                <p>Connect with us :</p>
                                <div className="social-icons">
                                    <a href="#">
                                    <FaFacebookF color='white' />
                                    </a>
                                    <a href="#">
                                    <FaYoutube color='white' />
                                    </a>
                                    <a href="#">
                                    <FaInstagram color='white' />
                                    </a>
                                    <a href="#">
                                    <FaLinkedinIn color='white' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <span className="circle one"></span>
                            <span className="circle two"></span>

                            <form action="index.html" autocomplete="off">
                                <h3 className="title">Contact us</h3>
                                <div className="input-contact-container">
                                    <input type="text" name="name" className="input" ref={(el) => (inputRefs.current[0] = el)}/>
                                    <label for="">Name</label>
                                    {/* <span>Username</span> */}
                                </div>
                                <div className="input-contact-container">
                                    <input type="email" name="email" className="input" ref={(el) => (inputRefs.current[1] = el)}/>
                                    <label for="">Email</label>
                                    {/* <span>Email</span> */}
                                </div>
                                <div className="input-contact-container">
                                    <input type="tel" name="phone" className="input" ref={(el) => (inputRefs.current[2] = el)}/>
                                    <label for="">Phone</label>
                                    {/* <span>Phone</span> */}
                                </div>
                                <div className="input-contact-container textarea">
                                    <textarea name="message" className="input" ref={(el) => (inputRefs.current[3] = el)}></textarea>
                                    <label for="">Message</label>
                                    {/* <span>Message</span> */}
                                </div>
                                <input type="submit" value="Send" className="btn" />
                            </form>
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}

export default Contact