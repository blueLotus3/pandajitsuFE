import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../components/Cart.js';

const CartPage = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div>
        <Link to='/cart'>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.gearName}
            <p>${item.gearPrice}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      </Link>
    </div>
  );
}

export default CartPage;