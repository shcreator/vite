// src/pages/Cart.jsx
import React from 'react';
import { useState } from 'react';

const cartItems = [
  {
    id: 1,
    title: 'Modern Business Website',
    imageUrl: 'https://via.placeholder.com/300x200',
    price: '$49',
    quantity: 1,
  },
  {
    id: 2,
    title: 'E-commerce Store',
    imageUrl: 'https://via.placeholder.com/300x200',
    price: '$29',
    quantity: 2,
  },
];

function Cart() {
  const [cart, setCart] = useState(cartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Subtotal</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2">
                    <img src={item.imageUrl} alt={item.title} className="w-24 h-16 object-cover" />
                  </td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleRemoveItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {cart.length > 0 && (
          <div className="mt-6">
            <p className="text-gray-600">Total: ${calculateTotal().toFixed(2)}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
