import React from 'react';
import './Services.css';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';

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
            {/* <a href={Resume}>
                
            </a> */}
            <button className="button s-button">Download Resume</button>
            <div className="blur s-blur1" style={{background: 'ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji = {Heartemoji}
                heading = {'Design'}
                detail = {'Figma, adobe photoshop,Adobe xd'}
                />
            </div>
             {/* second card */}
             <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                        emoji = {Glasses}
                        heading = {'Full stack developer'}
                        detail = {'Html, Css, Javascript, ReactJs, NodeJs, ExpressJs, MongoDb'}
                />
             </div>
            {/* 3rd div */}
            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                        emoji = {Humble}
                        heading = {'UI/UX'}
                        detail = {'lorem lorem lorem'}
                />
             </div>
             <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services