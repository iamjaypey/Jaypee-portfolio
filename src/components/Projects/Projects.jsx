import React from 'react'
import './Projects.css'
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Portcards from '../PortCards/Portcards';


const Projects = () => {
  return (
    <div className="projects col-12">

        {/* right side */}
        <div className="pcards1">
            <div>
                <Portcards
                emoji = {Heartemoji}
                heading = {'Design'}
                detail = {'Figma, adobe photoshop,Adobe xd'}
                />
            </div>
            {/* second card */}
            <div>
                <Portcards
                        emoji = {Glasses}
                        heading = {'Full stack developer'}
                        detail = {'Html, Css, Javascript, ReactJs, NodeJs, ExpressJs, MongoDb'}
                />
            </div>
            {/* 3rd div */}
            <div>
                <Portcards
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

export default Projects
