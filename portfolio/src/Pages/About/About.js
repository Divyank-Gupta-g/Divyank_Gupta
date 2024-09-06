import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
        <div className='container-fluid about' id='about'>
          <Fade bottom>
            <div className='container about-content'>
                <h2>About Me</h2>
                <p>
                I am a passionate and results-driven Software Developer with a strong foundation in Java and the MERN stack. 
                With a Master's in Computer Applications and hands-on experience in full-stack development, 
                I have successfully delivered high-quality software solutions that enhance business processes and operational efficiency.
                <br></br>
                <br></br>
                My expertise spans across various technologies, including Spring Boot, MySQL, MongoDB, React, and Node.js. 
                I've developed responsive web applications, interactive portfolio websites, and smart contact management systems, 
                showcasing my ability to combine innovation with practicality.
                <br></br>
                <br></br>
                As a quick learner and a team player, 
                I thrive in collaborative environments and am committed to continuous growth in the ever-evolving tech landscape. 
                Whether it's coding, problem-solving, or exploring new technologies, 
                I am driven by a deep curiosity and a passion for excellence.
                </p>
            </div>
          </Fade>
        </div>
    </>
  )
}

export default About