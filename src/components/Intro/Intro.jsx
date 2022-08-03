import React from 'react';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Bg1 from '../../img/Vector1.png';
import Bg2 from '../../img/Vector2.png';
import bgpic from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassimoji from '../../img/glassesimoji.png';

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className='i-name'>
                <span className='i-name1'>HI there! I am </span>
                <span className='i-name2'>Makanjuola Paul</span> <br />
                <span className='i-name3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione atque facere, modi repellendus optio, natus  </span>
            </div>
            
            <button className="i-button button">Hire me</button>

            <div className='i-icons'>
              <a href="">
                 <img src={Github} alt="" />
              </a>
              <a href="">
                <img src={LinkedIn} alt="" />
              </a>
              <a href="">
                <img src={Instagram} alt="" />
              </a>
              
            </div>
         </div>

        <div className="i-right">
            <img src={Bg1} className="vector1" alt="" />
            <img src={Bg2} className="vector2" alt="" />
            <img src={bgpic} className="boy" alt="" />
            <img src={glassimoji} alt="" />

            <div style={{top: '-4%', left: '65%'}}>
              <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
            </div>

            <div style={{top: '18rem', left:'8rem'}}>
                <FloatingDiv image={thumbup} txt1='Backend' txt2='Developer' />
            </div>

            {/* Blur divs */}
            <div className="blur" style={{background:"rgb (238,210,255)"}}></div>
            <div className="blur" style={{background:"#c1F5FF", top: '17rem', width: '21rem',height: '11rem', left: '-8rem'}}></div>
            {/* <img src={crown} alt="" />
            
            <img src={thumbup} alt="" /> */}
        </div>
    </div>
  )
}
