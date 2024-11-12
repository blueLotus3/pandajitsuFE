import React from 'react'
import data from './GearApi.js'

const BoxingGear = () => {

    const gear = data;

    const targetIds = [2, 5, 8];

    const boxingItems = gear.filter(item => targetIds.includes(item.id));

    return (
        <div className="boxingDiv">
        <ul>
        {boxingItems.map(item => (
        <li key={item.id}>
            <img src={item.gearPic} alt="PandaJitsuGear"></img>
            <p>{item.gearName}</p>
            <p>${item.gearPrice}</p>
            </li>
        ))}
    </ul>
    </div>
    ); 
};

export default BoxingGear