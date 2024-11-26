import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'
import { CartContext } from './Cart.js';

const JitsuGear = () => {

    const gear = data;

    const targetIds = [1, 4, 7];

    const jitsuItems = gear.filter(item => targetIds.includes(item.id));

    const { addToCart } = useContext(CartContext);

    return (
        <div className="jitsuDiv">
        <ul>
        {jitsuItems.map(item => (
        <li key={item.id}>
            <Link key={item.id} to={`/details/${item.id}`}>
            <img src={item.gearPic} className="PandaJitsuGear" alt="PandaJitsuGear"></img>
            </Link>
            <p>{item.gearName}</p>
            <p>${item.gearPrice}</p>
            <button onClick={() => addToCart(item)} className="AddButtn">Add to Cart</button> 
            </li>
        ))}
    </ul>
    </div>
    ); 
};

export default JitsuGear