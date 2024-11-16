import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'
import { CartContext } from './Cart'

const ThaiGear = () => {

    const gear = data;

    const targetIds = [3, 6, 9];

    const thaiItems = gear.filter(item => targetIds.includes(item.id));

    const { addItem } = useContext(CartContext);

    return (
        <div className="thaiDiv">
        <ul>
        {thaiItems.map(item => (
        <li key={item.id}>
            <Link key={item.id} to={`/details/${item.id}`}>
            <img src={item.gearPic} alt="PandaJitsuGear"></img>
            </Link>
            <p>{item.gearName}</p>
            <p>${item.gearPrice}</p>
            <button onClick={() => addItem(item)}>Add to Cart</button> 
            </li>
        ))}
    </ul>
    </div>
    ); 
};

export default ThaiGear