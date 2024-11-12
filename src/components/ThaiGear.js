import React from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'

const ThaiGear = () => {

    const gear = data;

    const targetIds = [3, 6, 9];

    const thaiItems = gear.filter(item => targetIds.includes(item.id));

    return (
        <div className="thaiDiv">
        <ul>
        {thaiItems.map(item => (
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

export default ThaiGear