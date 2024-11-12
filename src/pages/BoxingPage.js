import React from 'react';
import { Link } from 'react-router-dom';
import BoxingGear from '../components/BoxingGear.js';


const BoxingPage = () => {

    return (
        <Link to='/boxing'>
        <div>
            <BoxingGear />
        </div>
        </Link>
    )
}






export default BoxingPage