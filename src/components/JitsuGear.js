import React from 'react'
import { Link } from 'react-router-dom'


const JitsuGear = () => {
    return (
        <Link to={'/jiujitsu'}>
        <div className="boxingDiv">
            <h2>This is the jiujitsu gear section</h2>
            </div>
        </Link>
    ) 
}

export default JitsuGear