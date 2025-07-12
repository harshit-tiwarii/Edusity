import React from 'react'
import './about.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
         <div className='about-left'>
            <img src={about} alt='' className='about-img'></img>
            <img src={play_icon} alt='' className='play-icon'></img>
         </div>
         <div className='about-right'>
            <h3>About University</h3>
            <h2>Nurturing Tomorrows Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sit corrupti 
                corporis harum deserunt unde sint id adipisci, placeat temporibus deleniti nisi
                 est dignissimos laborum quaerat iste repudiandae. Nemo officia nobis, quaerat 
                ipsum harum tempore magnam repellat reprehenderit delectus, ut maxime, eveniet
                 doloribus.<br></br>  <br></br> Nulla cupiditate provident molestiae in rerum? Iure.
                 Nemo officia nobis, quaerat 
                ipsum harum tempore magnam repellat reprehenderit delectus, ut maxime, eveniet
                 doloribus. Nulla cupiditate provident molestiae in rerum? Iure.
                 <br></br>  <br></br> 
                 Nemo officia nobis, quaerat 
                ipsum harum tempore magnam repellat reprehenderit delectus, ut maxime, eveniet
                 doloribus. Nulla cupiditate provident molestiae in rerum? Iure.
            </p>
         </div>
    </div>
  )
}

export default About