import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './GearApi.js'
import { CartContext } from './Cart.js';

const IndivGear = ({ item }) => {
    /* Params used to render specific piece of gear when clicked from FullGear.js */
    const { id } = useParams();

    const indivGear = data.find(item => item.id === parseInt(id, 10))

    const { addToCart } = useContext(CartContext);

    return (
        <div className="IndivDiv">
            <Link to={'/'}>X</Link>
            <h2>{indivGear.gearName}</h2>
            <img src={indivGear.gearPic} className="PandaJitsuGear" alt="PandaJitsuGear"></img>
            <p>${indivGear.gearPrice}</p>
            <p>{indivGear.gearDesc}</p>
            <button onClick={() => addToCart(indivGear)} className="AddButtn">Add to Cart</button> 
            </div>
             
    )
}


export default IndivGear