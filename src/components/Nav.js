import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Cart.js';


const Nav = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    return (
            <header className="header">
            <nav className="navbar">
            <Link to ='/'>
            <img src={'https://res.cloudinary.com/ds7w3ysag/image/upload/v1638827235/Screen_Shot_2021-12-06_at_1.46.01_PM_psnicm.png'} alt="pandaLogo" className="pandaLogo"/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
            <Link to ='/'>
                <li className="nav-item"><p className="nav-link">Home</p></li>
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
            <Link to ='/cart'>
                <li className="nav-item">
    <p className="nav-link">Shopping Cart ({totalItems})</p>
                    </li>
                </Link>
                </ul>
                </nav>
                </header>
    )
}



export default Nav