import React from 'react'
import data from './GearApi.js'


const FullGear = () => {

    const gear = data;
    return (
        <div className="fullDiv">
            <ul>
            {gear.map((item) => (
            <li key={item.id}>
                <img src={item.gearPic} alt="PandaJitsuGear"></img>
                <p>{item.gearName}</p>
                <p>${item.gearPrice}</p>
                </li>
            ))}
            </ul>
            </div>
    ) 
}

export default FullGear