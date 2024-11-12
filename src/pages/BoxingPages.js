import React from 'react';
import { Link } from 'react-router-dom';
import BoxingGear from '../components/BoxingGear.js';
// import data from '../components/GearApi';

const BoxingPage = () => {
    // const boxingData = data;
    // const boxingIds = [2, 5, 8];

    return (
        <Link to='/boxing'>
        <div>
            <BoxingGear />
        </div>
        </Link>
    )
}






export default BoxingPage