import React from 'react'
import { Link } from 'react-router-dom'


const ThaiGear = () => {
    return (
        <Link to={'/muaythai'}>
        <div className="thaiDiv">
            <h2>This is the muay thai gear section</h2>
            </div>
        </Link>
    ) 
}

export default ThaiGear