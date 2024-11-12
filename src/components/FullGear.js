import React from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'


const FullGear = () => {

    const gear = data;

    return (
        <div className="fullDiv">
            <ul>
            {gear.map((item) => (
            <Link key={item.id} to ={`/details/${item.id}`}>
            <li key={item.id}>
                <img src={item.gearPic} alt="PandaJitsuGear"></img>
                <p>{item.gearName}</p>
                <p>${item.gearPrice}</p>
                </li>
            </Link>
            ))}
            </ul>
            </div>
    ) 
}

export default FullGear