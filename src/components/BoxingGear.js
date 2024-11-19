import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'
import { CartContext } from './Cart.js';

const BoxingGear = () => {

    const gear = data;

    const targetIds = [2, 5, 8];

    const boxingItems = gear.filter(item => targetIds.includes(item.id));

    const { addToCart } = useContext(CartContext);

    return (
        <div className="boxingDiv">
        <ul>
        {boxingItems.map(item => (
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
    ); 
};

export default BoxingGear