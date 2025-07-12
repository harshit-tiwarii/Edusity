import React, { useRef, useState } from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
   
    const [result,setresult] = useState("");
    const resetform = useRef();

    const formResult = (event)=>{
        event.preventDefault();
        setresult("Message sent successfully")
        resetform.current.reset();
    }

  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send us a message <img src={msg_icon}></img></h3>
        <p>Feel free to reach out through contact form or find our contact information below.
             Your feedback, questions, and suggestions are important to us as we strive to provide
              exceptional service to our university community.</p>
    <ul>
        <li><img src={mail_icon}></img> Contact@developer.com</li>
        <li><img src={phone_icon}></img> +1123-456-7890</li>
        <li><img src={location_icon}></img> 77 Massachusetts Ave, CambridgeMA 02139, United States</li>
    </ul>
       </div>
       
       <div className="contact-col">
          <form onSubmit={formResult} ref={resetform}>
             <label>Name</label>
             <input type='text' name='name' placeholder='Enter Your name' required></input>
             <label>Phone Number</label>
             <input type='tel' name='phone' placeholder='Enter Your mobile number' required></input>
             <label>Email</label>
             <input type='email' name='email' placeholder='Enter Your email Id' required></input>
             <label>Write your message here</label>
             <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
             <button className='btn dark-btn'>Submit <img src={white_arrow} ></img></button>
          </form>
          <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact