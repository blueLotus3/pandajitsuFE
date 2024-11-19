import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../components/Cart.js';

const CartPage = () => {
  const { cartItems, addItem ,removeItem } = useContext(CartContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.gearPrice * (c.qty || 1),0);
  const taxPrice = itemsPrice * 0.14;
  const roundedTax = Math.round(taxPrice * 100) / 100;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const roundedTotal = Math.round(totalPrice * 100) / 100;

  return (
    <aside className="block col-1">
      <Link to='/cart'>
    <h2>Cart Items</h2>
    <div>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
    </div>
    {cartItems.map((item) => (
        <div key={item.id} className="row">
            <div className="col-2">{item.gearName}</div>
            <div className="col-2">
                <button onClick={() => addItem(item)} className="add">+</button>
                <button onClick={() => removeItem(item.id)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
                {item.qty} x ${item.gearPrice}
            </div>
        </div>
    ))}
    {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice}</div>
        </div>
        <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${roundedTax}</div>
        </div>
        <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice}</div>
        </div>
        <div className="row">
            <div className="col-2"><strong>Total Price</strong></div>
            <div className="col-1 text-right">${roundedTotal}</div>
        </div>
        <hr/>
        <div className="row">
            <button onClick={() => alert('Implement Checkout')}>
                Checkout
            </button>
        </div>
        </>
    )}
    </Link>
</aside>
)
}

export default CartPage;