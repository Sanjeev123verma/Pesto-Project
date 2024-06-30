import React from 'react';
import { useCart } from '../CartContext';

const CartItem = ({ item, removeFromCart }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center">
    <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
    <h2 className="text-lg font-semibold">{item.name}</h2>
    <p className="text-gray-600">${item.price.toFixed(2)}</p>
    <p>Quantity: {item.quantity}</p>
    <button 
      onClick={() => removeFromCart(item.id)}
      className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Remove from Cart
    </button>
  </div>
);

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  console.log('Cart contents:', cart); // Debug log

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;