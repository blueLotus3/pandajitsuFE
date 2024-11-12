import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

    return (
            <header className="header">
            <nav className="navbar">
            <Link to ='/'>
            <img src={'https://res.cloudinary.com/ds7w3ysag/image/upload/v1638827235/Screen_Shot_2021-12-06_at_1.46.01_PM_psnicm.png'} alt="pandaLogo" className="pandaLogo"/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul className="menu">
            <Link to ='/'>
                <li className="nav-item"><p className="nav-link">Panda Jitsu Gear</p></li>
                </Link>
            <Link to ='/boxing'>
                <li className="nav-item"><p className="nav-link">Boxing Gear</p></li>
                </Link>
            <Link to ='/jiujitsu'>
                <li className="nav-item"><p className="nav-link">Jiu Jitsu Gear</p></li>
                </Link>
            <Link to ='/muaythai'>
                <li className="nav-item"><p className="nav-link">Muay Thai Gear</p></li>
                </Link>
                </ul>
                </nav>
                </header>
    )
}



export default Nav