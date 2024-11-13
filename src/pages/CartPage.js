import React from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Link to='/cart'>
        <div className="cartDiv">
            <p>This is the Cart Page</p>
        </div>
        </Link>
    )
}

export default Cart