import React from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'

const BoxingGear = () => {

    const gear = data;

    const targetIds = [2, 5, 8];

    const boxingItems = gear.filter(item => targetIds.includes(item.id));

    return (
        <div className="boxingDiv">
        <ul>
        {boxingItems.map(item => (
            <Link key={item.id} to={`/details/${item.id}`}>
        <li key={item.id}>
            <img src={item.gearPic} alt="PandaJitsuGear"></img>
            <p>{item.gearName}</p>
            <p>${item.gearPrice}</p>
            </li>
            </Link>
        ))}
    </ul>
    </div>
    ); 
};

export default BoxingGear