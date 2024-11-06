// Hero.js
import React from 'react';
import styles from './Header.module.css';
import styled from "styled-components";
import HeaderImage from "../../assets/img/coding.png";

const AnimattedText = styled.div`
  background: -webkit-linear-gradient(25deg, #eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite;
  position: relative;

  @media (max-width: 860px) {
     font-size: 1.5rem;
     font-weight: 500;
     overflow: hidden;
  }
  
  @media (max-width: 860px) {
     font-size: 1.125rem;
     font-weight: 500;
     overflow: hidden;
  }

@keyframes type {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

`;

const Hero = () => {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.hero_content}>
        <h1>Welcome to ERP Tech!</h1>
        <AnimattedText>Your Gateway to Learning!</AnimattedText>
        <p>
        We’re thrilled to have you here! Whether you're looking to enhance your career, learn a new skill, or pursue a passion, 
        our platform offers a wide range of courses to help you achieve your goals.</p>
        <button className={styles.cta_button}>Get Started</button>
      </div>
      <div className={styles.hero_image}>
        <img src={HeaderImage} alt="Programming Illustration" />
      </div>
    </section>
  );
};



export default Hero;
