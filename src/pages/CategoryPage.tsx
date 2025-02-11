import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState, AppDispatch } from "../interface/store";
import { addToCart, removeFromCart } from "../interface/CartSlice";
import { addToWishlist, removeFromWishlist } from "../interface/WishlistSlice";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const CategoryPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const [currency, setCurrency] = useState<'USD' | 'GEL'>('USD'); 
  const priceInUSD = 100; 
  const exchangeRate = 2.80; 

  const convertPrice = (price: number, currency: 'USD' | 'GEL'): number => {
    if (currency === 'USD') {
      return price;
    } else if (currency === 'GEL') {
      return price * exchangeRate;
    }
    return price;
  };

  const toggleCurrency = () => {
    setCurrency(currency === 'USD' ? 'GEL' : 'USD'); 
  };


  return (
    <div >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
           Dog
          </h2>

          <div>
            <button onClick={toggleCurrency} className="px-4 py-2 mt-2 bg-blue-500 text-white rounded">
              {currency === 'USD' ? 'GEL' : 'USD'}
            </button>
            <p className="text-sm font-medium text-gray-900">
              {currency === 'USD' ? 'Price in USD' : 'Price in GEL'}: {convertPrice(priceInUSD, currency).toFixed(2)}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                alt="lion"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />

              <div className="mt-4 flex justify-between">
                <div>
                  <p className="mt-1 text-sm text-gray-500">Gold</p>
                 
                  <div className="flex items-center space-x-2">
                    <span>({cartItems.length})</span>
                    <button
                      onClick={() => dispatch(addToCart("New Item"))}
                      className="bg-green-500 p-2 rounded text-white hover:bg-green-600"
                    >
                      Add<FaHeart/>
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(cartItems[0]))}
                      className="bg-red-500 p-2 rounded text-white hover:bg-red-600"
                    >
                      Remove<FaHeart/>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span>({wishlistItems.length})</span>
                    <button
                      onClick={() => dispatch(addToWishlist("Wishlist Item"))}
                      className="bg-green-500 p-2 rounded text-white hover:bg-green-600"
                    >
                      Add<FaShoppingCart/>
                    </button>
                    <button
                      onClick={() => dispatch(removeFromWishlist(wishlistItems[0]))}
                      className="bg-red-500 p-2 rounded text-white hover:bg-red-600"
                    >
                      Remove<FaShoppingCart/>
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
