import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
import { Link, Element } from 'react-scroll';
function Navbar() {

  const [sticky,setsticky] = useState(false);

  useEffect(()=>{
       window.addEventListener('scroll',()=>{
         window.scrollY > 100 ? setsticky(true):setsticky(false);
       })
  },[])

  return (
    <nav className={`container ${sticky?'darknav':''}`}>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li><Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
            <li><Link to="programs" smooth={true} duration={500} offset={-250}>Program</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-150}>About Us</Link></li>
            <li><Link to="campus" smooth={true} duration={500} offset={-260}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>Testimonial</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-250}><button className='btn'>Contact us</button></Link></li>
        </ul>
    </nav>
    
  )
}

export default Navbar