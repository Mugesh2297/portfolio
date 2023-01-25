import React from 'react';
import "./about.css";
import AboutImg from "../../assests/myImg.jpg";
import CV from "../../assests/Resume_Mugesh K.pdf";

function About() {
  return (
    <section className= "about section" id= "about">
        <h2 className= "section__title">About Me</h2>
        <span className='section__subtitle'>My Introduction</span>
        <div className="about__container container grid">
         <img src={AboutImg} alt="" className= "about__img"/>
         <div className="about__data">

         
         <p className='about__description'>Certified Full Stack Developer with quite few own projects looking for an 
         opportunity to work and excel my skills in an organization and 
         interested to explore and work on complex projects.</p>
         <a  href="https://drive.google.com/file/d/1zJ48o5a-a8BHTo9uFiGlkAHzqdG3pQM4/view?usp=drivesdk" 
         className="button button__cv button--flex" target="_blank">Download CV</a>
        </div>
        </div>
    </section>
    )
}

export default About