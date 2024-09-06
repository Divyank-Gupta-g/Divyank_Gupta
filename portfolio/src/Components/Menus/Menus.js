import React from 'react'
import './Menus.css'
import image from './image/DIVYANKgupta.jpg';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

// icons
import { IoHome } from "react-icons/io5";
import { RiUserVoiceFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateDuotone } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";

const Menus = ({toggle}) => {
  return (
    <>
        {toggle ? (
            <>
                <Zoom>
                    <div className='navbar-profile-pic'>
                        <img src={image} alt='Divyank Gupta' />
                    </div>
                </Zoom>
                
                <Fade left>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-links'>
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                                <IoHome />Home
                            </Link>
                        </div>

                        <div className='nav-links'>
                            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                                <RiUserVoiceFill />About
                            </Link>
                            
                        </div>

                        <div className='nav-links'>
                            <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                                <IoSchoolSharp />Education
                            </Link>
                        </div>

                        <div className='nav-links'>
                            <Link to='experience' spy={true} smooth={true} offset={-100} duration={100}>
                                <MdWorkHistory />Experience
                            </Link>
                        </div>

                        <div className='nav-links'>
                            <Link to='certification' spy={true} smooth={true} offset={-100} duration={100}>
                                <PiCertificateDuotone />Certifications
                            </Link>
                        </div>

                        <div className='nav-links'>
                            <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                                <BsPersonWorkspace />Projects
                            </Link>
                        </div>

                        <div className='nav-links'>
                            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                                <MdOutlineMessage />Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
                </Fade>
            </>
            ) : (
                <>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-links'>
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                                    <IoHome title='Home' />
                                </Link>
                            </div>

                            <div className='nav-links'>
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                                    <RiUserVoiceFill title='about' />
                                </Link> 
                            </div>

                            <div className='nav-links'>
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                                    <IoSchoolSharp title='Education' />
                                </Link>
                            </div>

                            <div className='nav-links'>
                                <Link to='experience' spy={true} smooth={true} offset={-100} duration={100}>
                                    <MdWorkHistory title='Experience' />
                                </Link>
                            </div>

                            <div className='nav-links'>
                                <Link to='certification' spy={true} smooth={true} offset={-100} duration={100}>
                                    <PiCertificateDuotone title='Certifications' />
                                </Link>
                            </div>

                            <div className='nav-links'>
                                <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                                    <BsPersonWorkspace title='Projects' />
                                </Link>
                            </div>

                            <div className='nav-links'>
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                                    <MdOutlineMessage title='Contact Me' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    </>
  )
}

export default Menus