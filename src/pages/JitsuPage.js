import React from 'react';
import { Link } from 'react-router-dom';
import JitsuGear from '../components/JitsuGear.js';


const JitsuPage = () => {

    return (
        <Link to='/jiujitsu'>
        <div>
            <JitsuGear />
        </div>
        </Link>
    )
}






export default JitsuPage