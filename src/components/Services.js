import React from "react"
import Title from "./Title"

import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const Services = () => {
  return ( <section className="section bg-grey">
    <Title title="skills"/>
    <div className="section-center services-center">      
          <article  className="service">  
          <FaCode className="service-icon" />      
            <h4>Web Developement Skills</h4>
            <div className="underline"></div> 
            <div>
              <p><b>Languages: </b> C, MATLAB, HTML, CSS, Python, JavaScript</p> 
              <p><b>Frameworks: </b> React, Bootstrap, Node JS</p>
              <p><b>Database: </b>MongoDB, Firebase</p>
              <p><b>Tools & Platforms: </b> Git/Github, Command Line, InDesign</p>     
              </div>      
          </article>

          <article  className="service">  
          <FaSketch className="service-icon" />     
            <h4>Relevant Experiences</h4>
            <div className="underline"></div>     
            <div>
            <p><b> Trainee Software Developer</b> <br/><span>The Developer Academy, Sheffield</span><br/></p>
            <p><b> Graduate Research Assistant</b> <br/><span>Smart Structures, Systems & Control Lab, IIUM</span><br/></p>
            <p><b> Engineering Internship</b> <br/><span>Centre of Artificial Intelligence and Robotics (CAIRO), UTM</span><br/></p>
              </div>  
          </article>  
    </div>
  </section>
  )
}

export default Services
