import React from 'react'
import '../../styles/card.css';

import ServiceImg1 from "../../assets/img/service1.jpg";
import ServiceImg2 from "../../assets/img/service2.jpg";
import ServiceImg3 from "../../assets/img/service3.jpg";

const Services = ({openModal}) => {
  const handleClick = () => {
    const content = (
      <div>
        <h1>Welcome to the Modal Example</h1>
        <p>This modal demonstrates a structured layout with headings, bullet points, and paragraphs.</p>

        <h2>Features</h2>
        <ul>
          <li>Easy to use and customizable</li>
          <li>Dynamic content based on button clicks</li>
          <li>Full-page responsive layout</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Improves user experience</li>
          <li>Reduces clutter on the main page</li>
          <li>Reusable across various components</li>
        </ul>

        <p>Below are additional advantages of using a modal structure:</p>
        <ul>
          <li>Enhanced focus on important content</li>
          <li>Seamless navigation</li>
          <li>Support for various screen sizes</li>
        </ul>
      </div>
    );
    openModal(content);
  };


  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p> We are committed to delivering outstanding services tailored to meet your needs. With a focus on innovation, quality, and customer satisfaction, here’s what sets us apart:              <br />
            </p>
          </div>
          <div className="cards-wrapper">
            <div className="card">
              <img src={ServiceImg1} alt="Service 1" className="card-img" />
              <div className="card-content">
                <h3>S/4 HANA Implementation Project</h3>
                <p>SAP allows easy and global integration of business processes by creating an efficient work environment for the users thereby reducing the possibility of errors and redundant information. SAP has immense capabilities to deliver data-driven solutions for various operations, but SAP implementation demands a high-end accuracy and acuteness to yield maximum benefits.</p>
                <div class="card-footer">
                  <a href="#" class="btn" onClick={handleClick}>Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={ServiceImg2} alt="Service 2" className="card-img" />
              <div className="card-content">
                <h3>S/4 HANA Support Project</h3>
                <p>All Functional support activities (except new requirements) shall be carried out, Our SAP Application Functional Support Services Accountability finding in transaction.</p>
                <ul class="card-list">
                  <li>ERP Finance & Controlling (FICO)</li>
                  <li>ERP Sales and Distribution (SD)</li>
                  <li>ERP Sales and Distribution (SD)</li>
                  <li>ERP Production Planning (PP)</li>
                  <li>ERP Quality Management (QM)</li>
                  <li>ERP Project Systems (PS)</li>
                </ul>
                <div class="card-footer">
                  <a href="#" class="btn">Read More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={ServiceImg3} alt="Service 3" className="card-img" />
              <div className="card-content">
                <h3>S/4 HANA Rollout Project</h3>
                <p>First, identify your requirements, such as business process, integration flow, and testing scenarios, and then analyze the impact those requirements will have on your organization. For example, when you plan to release a certain global standard in your organization’s financial reporting, each unit may have to create a specific financial transaction/process in SAP to meet that standard requirement. In this case, you’ll need to be aware that there are regions</p>
                <div class="card-footer">
                  <a href="#" class="btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  )
}

export default Services