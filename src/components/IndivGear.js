import React from 'react'
import { Link } from 'react-router-dom'
import data from './GearApi.js'

const IndivGear = () => {

    const gear = data + id;

    return (
        <div className="IndivDiv">
            <Link to={'/'}>X</Link>
            <ul>
            {gear.map((item) => (
            <li key={item.id}>
                <p>{item.gearName}</p>
                <img src={item.gearPic} alt="PandaJitsuGear"></img>
                <p>${item.gearPrice}</p>
                <p>{item.gearDesc}</p>
                </li>
            ))}
            </ul>
            </div>
    ) 
}

export default IndivGear