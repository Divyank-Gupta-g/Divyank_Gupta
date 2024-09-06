import React, {useState} from 'react'
import './Mobilenav.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-scroll';

// icons
import { IoHome } from "react-icons/io5";
import { RiUserVoiceFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateDuotone } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";

const Mobilenav = () => {
    const [open, setOpen] = useState(false);

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    }

    const handleMenuClick = () => {
        setOpen(false);
    }

  return (
    <>
        <div className='mobile-nav'>
            <div className='mobilenav-header'>
                {open ? 
                    (<BiMenuAltLeft size={30} className='mobilenav-icon' onClick={handleOpen}/>) 
                    : 
                    (<GiHamburgerMenu size={30} className='mobilenav-icon' onClick={handleOpen}/>)}
                <span className='mobilenav-title'>Divyank Gupta</span>
            </div>

            {open && (
                <div className='mobilenav-menu'>
                <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-links'>
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <IoHome title='Home' />
                                </Link>
                            </div>
    
                            <div className='nav-links'>
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <RiUserVoiceFill title='About' />
                                </Link>
                                
                            </div>
    
                            <div className='nav-links'>
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <IoSchoolSharp title='Education' />
                                </Link>
                            </div>
    
                            <div className='nav-links'>
                                <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <MdWorkHistory title='Experience' />
                                </Link>
                            </div>
    
                            <div className='nav-links'>
                                <Link to='certification' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <PiCertificateDuotone title='Certifications' />
                                </Link>
                            </div>
    
                            <div className='nav-links'>
                                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <BsPersonWorkspace title='Projects' />
                                </Link>
                            </div>
    
                            <div className='nav-links'>
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                    <MdOutlineMessage title='Contact Me' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    </>
  )
}

export default Mobilenav