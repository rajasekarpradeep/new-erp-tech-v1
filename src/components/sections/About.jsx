import React from 'react';
import HeaderImage from "../../assets/img/abouts.png";

const About = () => {
    return (
        <>
            <section className='about-new-section' id="about">
                <h2>About Us</h2>
                <div className="about-new-content">

                    <div className="about-new-text">
                        {/* <h3>Our Mission</h3> */}
                        <p>We are committed to delivering innovative solutions that empower businesses to thrive.  Our team of experts brings a wealth of experience and passion to every project.We believe in sustainable growth and strive to make a positive impact on the world.
                        Customer satisfaction is at the core of everything we do. We strive to deliver top-notch services and innovative solutions that empower businesses to achieve excellence. With a dedicated team of experts, we continuously push the boundaries of technology and creativity to help our clients succeed.</p>
                    </div>

                    <div className="about-new-image">
                        <img src={HeaderImage} alt="About Us Image" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About