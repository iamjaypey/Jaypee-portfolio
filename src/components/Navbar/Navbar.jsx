import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className='n-name'></div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                 <ul>
                 <li>Home</li>
                 <li>Services</li>
                 <li>Projects</li>
                 <li>Testimonials</li>
                 </ul>
            </div>
            <button className="button n-button">
                    let's connect
            </button>
        </div>
    </div>
  )
}

export default Navbar