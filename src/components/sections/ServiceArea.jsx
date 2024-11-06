import React from 'react'
import ServiceImg1 from "../../assets/img/service1.jpg";
import ServiceImg2 from "../../assets/img/service2.jpg";
import ServiceImg3 from "../../assets/img/service3.jpg";
import ServiceImg4 from "../../assets/img/service4.jpg";
import ServiceImg5 from "../../assets/img/service5.jpg";
import ServiceImg6 from "../../assets/img/service6.jpg";
import ServiceImg7 from "../../assets/img/service7.jpg";
import ServiceImg8 from "../../assets/img/service8.jpg";

const ServiceArea = () => {

    return (
        <>
        <section className="service-section">
        <div className='service-container'>
        <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg1} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">The Intelligent Enterprise</h2>
                        <p className='service-card-text'>An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable.</p>
                    </div>
                </div>
            
                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg2} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">Cloud ERP</h2>
                        <p className="service-card-text">Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance.</p>
                    </div>
                </div>

                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg4} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">Intelligent Technologies</h2>
                        <p className="service-card-text">Intelligent Technologies offers the software (Dynamics, Acumatica, CRM) to run your business and the expertise to keep it all working smoothly. Explode invention in your business with ERP Expertise Platform.</p>
                    </div>
                </div>

                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg5} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">Small and Midsize Application Software</h2>
                        <p className="service-card-text">FX Consultancy prepare your business to address today’s encounters while building the foundation to grasp future prospects. Run all aspects of your small business or midsize company with ERP SME software. Our solutions cover ERP, HR, CRM, analytics, data platforms, and more.</p>
                    </div>
                </div>


                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg6} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">Mobility</h2>
                        <p className="service-card-text">UI5 apps are built using HTML5, JS, XML, OData and JSON. Based on the Model, View, Controller (or MVC) design pattern  Mobile technology include application design, cross-platform strategy, server side expansion, testing.</p>
                    </div>
                </div>

                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg3} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">Intellectual Robotic Process Mechanization</h2>
                        <p className="service-card-text">Our ERP Intellectual Robotic Process Mechanization services aim to automate master data creation,  it is easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software.</p>
                    </div>
                </div>

                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg7} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">Big Data & Data Analytics</h2>
                        <p className="service-card-text">Data analytics is the science of analyzing raw data to make conclusions about that information. Our Big Data rehearsal brings in expertise of wide range of apparatuses and knowledges to build platforms.</p>
                    </div>
                </div>

                <div className="service-card">
                    <figure className="service-card-img">
                        <img src={ServiceImg8} />
                    </figure>
                    <div className="service-card-body">
                        <h2 className="service-card-title">IT staffing</h2>
                        <p className="service-card-text">Our IT staffing division with a mission to growing clients’ talent pools through Workforce planning, Recruitment and selection, Placement and induction, Onboarding, Training and development, Performance appraisal, Retention, Exit or separation.</p>
                    </div>
                </div>

            </div>

        </section>
           
        </>

    )
}

export default ServiceArea