// CartContext.jsx

import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    const cartFromLocalStorage = window.localStorage.getItem('cart');
    if (cartFromLocalStorage) {
      setCart(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  const addToCart = (pizza) => {
    const newCart = { ...cart };
    if (newCart.items.find((item) => item.id === pizza.id)) {
      newCart.items = newCart.items.map((item) => {
        if (item.id === pizza.id) {
          return { ...item, quantity: item.quantity + 1, subtotal: item.subtotal + item.price };
        }
        return item;
      });
    } else {
      newCart.items.push({ ...pizza, quantity: 1, subtotal: pizza.price });
    }
    newCart.total = newCart.items.reduce((acc, item) => acc + item.subtotal, 0);
    setCart(newCart);
  };

  const removeFromCart = (pizza) => {
    const newCart = { ...cart };
    newCart.items = newCart.items.filter((item) => item.id !== pizza.id);
    newCart.total = newCart.items.reduce((acc, item) => acc + item.subtotal, 0);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const removeItemFromCart = (pizza) => {
    const newCart = { ...cart };
    const selectedItem = newCart.items.find((item) => item.id === pizza.id);
    if (selectedItem.quantity > 1) {
      newCart.items = newCart.items.map((item) => {
        if (item.id === pizza.id) {
          return { ...item, quantity: item.quantity - 1, subtotal: item.subtotal - item.price };
        }
        return item;
      });
    } else {
      newCart.items = newCart.items.filter((item) => item.id !== pizza.id);
    }
    newCart.total = newCart.items.reduce((acc, item) => acc + item.subtotal, 0);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
