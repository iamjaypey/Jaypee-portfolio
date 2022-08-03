import React from 'react';
import './Services.css';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="services-txt">
            <span>My</span>
            <span>Services</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 <br /> Est pariatur dolorem assumenda iure ipsum ducimus quibusdam enim vero.
            </span>
            <button className="button s-button">Download Resume</button>
            <div className="blur s-blur1" style={{background: 'ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            Right side
        </div>
    </div>
  )
}

export default Services