import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade';

// Smart contact management
import image01 from '../../Assets/ProjectImages/ContactMnagementApp/Screenshot1.png'

// Portfolio
import image11 from '../../Assets/ProjectImages/PortfolioProject/Screenshot1.png'

const Projects = () => {
  return (
    <>
      <div className='container-fluid projects-container' id='project'>
        <div className='container projects'>
            <h2>Projects</h2>

            <div className='row' id='ads'>
              <Fade left>
                <div className='col-md-6'>
                  <div class="card">
                    <span className='card-notify-badge'>Java SpringBoot</span>
                    <img src={image01} alt='ContactManagementApp' />
                    <div class="card__content">
                      <p class="card__title">Smart Contact Management Application</p>
                      <p class="card__description">
                        I developed a secure, user-friendly app using Java Spring Boot and MySQL with 
                        OAuth for GitHub and Google logins. Featuring email authentication, dark/light mode, 
                        and sleek styling with JavaScript and Tailwind, the app ensures robust security and cloud storage 
                        with Spring Security and Cloudinary, demonstrating my expertise in integrating advanced technologies 
                        for an optimal user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade right>
                <div className='col-md-6'>
                  <div class="card">
                    <span className='card-notify-badge'>MERN Stack</span>
                    <img src={image11} alt='Portfolio' />
                    <div class="card__content">
                      <p class="card__title">Interactive Portfolio Website</p>
                      <p class="card__description">
                        I built a sleek, responsive portfolio with the MERN stack, 
                        highlighting my skills and projects in an engaging way. 
                        The site features an easy-to-use "Contact Me" form and direct links to my LinkedIn and GitHub profiles, 
                        offering a seamless networking experience while showcasing my work effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>

              {/* <Fade right>
              <div className='col-md-6'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <span className='card-notify-badge'>MERN Stack</span>
                    <img src={image11} alt='Portfolio' />
                  </div>
                  <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>Express.js</span>
                    <span className='card-detail-badge'>ReactJs</span>
                    <span className='card-detail-badge'>NodeJs</span>
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>Portfolio Website</h3>
                    </div>
                    <a className='ad-btn' href='#'>View</a>
                  </div>
                </div>
              </div>
              </Fade> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects