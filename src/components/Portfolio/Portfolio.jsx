import React from 'react'
import Portfolio from './Portfolio.css'



const Portfolio = () => {
  return (
    <div className="portfolio">

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

export default Portfolio