import React from 'react'
import { Link } from 'react-router-dom'


const BoxingGear = () => {
    return (
        <Link to={'/boxing'}>
        <div className="boxingDiv">
            <h2>This is the boxing gear section</h2>
            </div>
        </Link>
    ) 
}

export default BoxingGear