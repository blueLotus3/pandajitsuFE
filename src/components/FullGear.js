import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'
import { CartContext } from './Cart.js';

const FullGear = () => {
    /* data taken from GearApi.js */
    const gear = data;

    /* CartContext used for adding gear to Shopping Cart */
    const { addToCart } = useContext(CartContext);

    
    return (
        /* Map Function for rendering all pieces of equipment */
        <div className="fullDiv">
            <ul>
            {gear.map((item) => (
            <li key={item.id}>
                <Link key={item.id} to={`/details/${item.id}`}>
                <img src={item.gearPic} alt="PandaJitsuGear"></img>
                </Link>
                <p>{item.gearName}</p>
                <p>${item.gearPrice}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button> 
                </li>
            ))}
            </ul>
            
            </div>
    ) 
}

export default FullGear