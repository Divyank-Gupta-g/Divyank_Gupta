import React from 'react'
import Fade from 'react-reveal/Fade';
import './Certificates.css'

import image01 from '../../Assets/Certificates/NPTEL_JAVA.jpg'
import image02 from '../../Assets/Certificates/NPTEL_DSA.png'
import image03 from '../../Assets/Certificates/NPTEL_DBMS.jpg'
import image04 from '../../Assets/Certificates/GATE.png'
import image05 from '../../Assets/Certificates/NET.png'
import image06 from '../../Assets/Certificates/PostgreSQL.png'

const Certificates = () => {
  return (
    <>
        <div className='container-fluid certificates-container' id='certification'>
        <div className='container certificates'>
            <h2>Certificates</h2>

            <div className='row' id='ads'>
              <Fade left>
              <div className='col-md-4'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <img src={image04} alt='GATE' />
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>GATE - 2024</h3>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>

              <Fade top>
              <div className='col-md-4'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <img src={image05} alt='NET' />
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>UGC NET - Dec'23</h3>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>

              <Fade right>
              <div className='col-md-4'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <img src={image06} alt='PostgreSQL' />
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>PostgreSQL</h3>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>
            </div>

            <div className='row' id='ads'>
              <Fade left>
              <div className='col-md-4'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <img src={image01} alt='NPTEL JAVA' />
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>Programming in Java</h3>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>

              <Fade bottom>
              <div className='col-md-4'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <img src={image02} alt='NPTEL DSA' />
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>DSA using Java</h3>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>

              <Fade right>
              <div className='col-md-4'>
                <div className='card rounded'>
                  <div className='card-image'>
                    <img src={image03} alt='NPTEL DBMS' />
                  </div>
                  <div className='card-body'>
                    <div className='project-title m-auto'>
                      <h3>D B M S</h3>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>
            </div>
        </div>
      </div>
    </>
  )
}

export default Certificates