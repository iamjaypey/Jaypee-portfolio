import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import Amazon from '../../img/amazon.png';
const Works = () => {
  return (
    <div className="works">
          {/* left side */}
          <div className="services-txt">
            <span>Brands and clients</span>
            <span>i have worked for</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 <br /> Est pariatur dolorem assumenda iure ipsum ducimus quibusdam enim vero.
                 <br />Est pariatur dolorem assumenda iure ipsum ducimus quibusdam enim vero.
                 <br />Est pariatur dolorem assumenda iure ipsum ducimus quibusdam enim vero.
            </span>
            
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: 'ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>

            </div>
         {/* Background-circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works