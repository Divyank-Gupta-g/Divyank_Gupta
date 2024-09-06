import React from 'react'
import './RechStach.css'
import Flash from 'react-reveal/Flash';

//icons
import html from '../../Assets/TechStack/icons8-html5-96.png'
import css from '../../Assets/TechStack/icons8-css-96.png'
import javascript from '../../Assets/TechStack/icons8-javascript-96.png'
import mongo from '../../Assets/TechStack/icons8-mongo-db-96.png'
import express from '../../Assets/TechStack/icons8-express-js-96.png'
import react from '../../Assets/TechStack/icons8-react-native-96.png'
import node from '../../Assets/TechStack/icons8-nodejs-96.png'
import java from '../../Assets/TechStack/icons8-java-96.png'
import springboot from '../../Assets/TechStack/icons8-spring-boot-96.png'
import mysql from '../../Assets/TechStack/icons8-mysql-96.png'
import postgre from '../../Assets/TechStack/icons8-postgresql-96.png'

const TechStack = () => {
  return (
    <>
        <div className="container-fluid techStackContainer">
            <div className='container techStack'>
                <h2>Technologies Used</h2>
                
                <div className='row'>
                    <Flash>
                    <div className='col-md-4'>
                        <div className='techStackCard'>
                            <img src={html} alt='html' title='HTML5' />
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-4'>
                        <div className='techStackCard'>
                            <img src={css} alt='css' title='CSS3'/>
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-4'>
                        <div className='techStackCard'>
                            <img src={javascript} alt='javascript' title='JavaScript'/>
                        </div>
                    </div>
                    </Flash>
                </div>
                <div className='row'>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={mongo} alt='mongo' title='MongoDB' />
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={express} alt='express' title='Express.js'/>
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={react} alt='react' title='React.js' />
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={node} alt='node' title='Node.js' />
                        </div>
                    </div>
                    </Flash>
                </div>
                <div className='row'>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={java} alt='Java' title='Java 8'/>
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={springboot} alt='SpringBoot' title='SpringBoot'/>
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={mysql} alt='MySQL' title='MySQL' />
                        </div>
                    </div>
                    </Flash>
                    <Flash>
                    <div className='col-md-3'>
                        <div className='techStackCard'>
                            <img src={postgre} alt='postgre' title='PostgreSQL' />
                        </div>
                    </div>
                    </Flash>
                </div>
            </div>
        </div>
    </>
  )
}

export default TechStack