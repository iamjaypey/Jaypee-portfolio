import React from 'react'
import './PortCards.css'


const Portcards = ({emoji, heading, detail}) => {

  return (
    <div className="pcard">
      <div className='p-img'>
        <img src={emoji} alt="" />
      </div>
       
      <span>{heading}</span>
      <span>{detail}</span> 
    </div>

  )
}

export default Portcards

