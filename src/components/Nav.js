import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <header className="header">
            <nav className="navbar">
                <ul class="nav-menu">
            <Link to ='/'>
                <li className="navlink"><p className="nav">Panda Jitsu Gear</p></li>
                </Link>
                <Link to ='/boxing'>
                <li className="navlink"><p className="nav-item">Boxing Gear</p></li>
                </Link>
                <Link to ='/jiujitsu'>
                <li className="navlink"><p className="nav-item">Jiu Jitsu Gear</p></li>
                </Link>
                <Link to ='/muaythai'>
                <li className="navlink"><p className="nav-item">Muay Thai Gear</p></li>
                </Link>
                </ul>
                </nav>
                <div className= "hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                </div>
        </header>
    )
}



export default Nav 