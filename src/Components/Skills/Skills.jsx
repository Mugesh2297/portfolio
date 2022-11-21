import React from 'react';
import "./skills.css";
import HTML from "../../assests/html.png";
import CSS from "../../assests/css.png";
import JavaScript from "../../assests/javascript.png";
import bootstrap from "../../assests/bootstrap.png";
import reactjs from "../../assests/react.png";
import redux from "../../assests/redux.png";
import mysql from "../../assests/mysql.png";
import mongodb from "../../assests/mongodb.png";
import nodejs from "../../assests/nodejs.png";
import express from "../../assests/ex.png";
import postman from "../../assests/postman.png";
import github from "../../assests/github.png";


function Skills() {
  return (
    
    <section className='skills section' id="skills">
         <h2 className= "section__title">Skills</h2>
        <span className='section__subtitle'>My Technical Skills</span>
        <div className="skills__container container grid">
        <img  className="img__element"src={HTML} alt="HTML"/>
        <img  className="img__element"src={CSS} alt="CSS"/>
        <img  className="img__element"src={JavaScript} alt="JAVASCRIPT"/>
        <img  className="img__element"src={bootstrap} alt="Bootstrap"/>
        <img  className="img__element"src={reactjs} alt="React JS"/>
        <img  className="img__element"src={redux} alt="Redux"/>
        <img  className="img__element"src={mysql} alt="MySQL"/>
        <img  className="img__element"src={mongodb} alt="MongoDB"/>
        <img  className="img__element"src={nodejs} alt="Node Js"/>
        <img  className="img__element"src={express} alt="Express Js"/>
        <img  className="img__element"src={postman} alt="Postman"/>
        <img  className="img__element"src={github} alt="Github"/>
        
        

        </div>
    </section>
  )
}

export default Skills