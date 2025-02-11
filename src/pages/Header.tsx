import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import CartPage from './CartPage'; 
import WishlistPage from "./WishlistPage";

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);  
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="p-4 top-[51px] bg-[#FFD59E] text-black text-[22px] flex items-center justify-between">
      <h1 className="text-2xl">logo</h1>

      <div className="flex items-center space-x-4">
        <a href="/" className="hover:text-gray-400 hover:font-bold">Home</a>
        <a href="/animals" className="hover:text-gray-400 hover:font-bold">Animals</a>
        <a href="/category" className="hover:text-gray-400 hover:font-bold">Category</a>
      </div>

      <div className="pr-[30px] flex items-center space-x-4">
        <a href="#" onClick={toggleCart} className="hover:text-gray-400">
          <FaHeart />
        </a>
        <a href="#" onClick={toggleCart} className="hover:text-gray-400">
        <FaShoppingCart />
        </a>
      </div>

      {isCartOpen && <CartPage onClose={closeCart} />}
      {isCartOpen && <WishlistPage onClose={closeCart} />} 
    </div>
  );
};

export default Header;
