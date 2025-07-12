import React from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Tittle from './component/Tittle/Tittle'
import Programs from './component/Programs/Programs'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Testimonial from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/> 
       <div className='container'>
        <Tittle subtittle="Our Programs" tittle="What we offers"/>
        <Programs/>
        <About/>
        <Tittle subtittle="Gallery" tittle="campus photos"/>
        <Campus/>
        <Tittle subtittle="Testimonials" tittle="What our student says"/>
        <Testimonial/>
        <Tittle subtittle="Contact Us" tittle="Get in touch"/>
        <Contact/>
        <Footer/>
       </div>
    </div> 
  )
}

export default App
