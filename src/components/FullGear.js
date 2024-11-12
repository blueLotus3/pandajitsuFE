import React from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'


const FullGear = () => {
    /* data taken from GearApi.js */
    const gear = data;

    return (
        /* Map Function for rendering all pieces of equipment */
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