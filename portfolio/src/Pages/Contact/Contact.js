import React, {useState} from 'react'
import './Contact.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLocationCity, MdWhatsapp, MdAlternateEmail } from "react-icons/md";
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleReset = () => {
        document.getElementById("myForm").reset();
        setName('');
        setEmail('');
        setMsg('');
    };

    const handleSend = (e) => {
        e.preventDefault();
        
        const templateParams = {
          from_name: name,
          from_email: email,
          message: msg,
        };

        emailjs.send('service_3p9o9ph', 'template_m8pd5ms', templateParams, 'EIzpUcCZl-XpagGcr')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log('FAILED...', error);
            alert('Error sending message. Please try again later.');
        });
    };

  return (
    <>
        <div className='container-fluid contact-container' id='contact'>
            <div className='container contact'>
                <h2>Contact Me</h2>

                <div className='card card0 border-0'>
                    <div className='row'>
                        <Fade left>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='card1'>
                                <div className='row border-line'>
                                    <h3>Divyank Gupta</h3>
                                    <address><MdLocationCity /> Noida, U.P., India</address>
                                    <tel><MdWhatsapp /> +91 - 89239 64795</tel>
                                    <email><MdAlternateEmail /> divyankgupta001@gmail.com</email>
                                </div>
                            </div>
                            <div className='card2'>
                                <div className='row border-line'>
                                <h3>Connect with me...</h3>
                                <span>
                                    <a href="https://www.linkedin.com/in/divyank-gupta-dg/" className='LinkedIn'><BsLinkedin size={48}/></a>
                                    <a href="https://github.com/Divyank-Gupta-g" className='GitHub'><BsGithub size={48}/></a>
                                </span>
                                </div>
                            </div>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='card3'>
                                <form id='myForm'>
                                <div className='row px-3'>
                                    <h3>Send Message...</h3>
                                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' class='mb-3' />
                                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' class='mb-3' />
                                    <textarea type='text' name='msg' value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Enter your message' class='mb-3' />
                                </div>
                                <div className='row px-3'>
                                    <button onClick={handleSend} type='submit' className='button'>Send</button>
                                    <button onClick={handleReset} type='reset' className='button'>Reset</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact