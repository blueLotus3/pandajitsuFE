import React from 'react';
import { Link } from 'react-router-dom';
import ThaiGear from '../components/ThaiGear.js';


const MuayThaiPage = () => {

    return (
        <Link to='/muaythai'>
        <div>
            <ThaiGear />
        </div>
        </Link>
    )
}






export default MuayThaiPage