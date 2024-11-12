import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './GearApi.js'

const IndivGear = () => {
    const { id } = useParams();
    const indivGear = data.find(item => item.id === parseInt(id, 10))

    return (
        <div className="IndivDiv">
            <Link to={'/'}>X</Link>
            <h2>{indivGear.gearName}</h2>
            <img src={indivGear.gearPic} alt="PandaJitsuGear"></img>
            <p>${indivGear.gearPrice}</p>
            </div>
    ) 
}

export default IndivGear