import React from 'react';
import useCartStore from '../Store/useCartStore';
import { X } from 'lucide-react';
import { CircleXIcon } from 'lucide-react';
const CartPage = ({ isOpen, onClose }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const updateCart = useCartStore((state) => state.updateCart);

  const totalPrice = cartItems?.reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );
  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1)
      updateCart(item._id, item.quantity - 1);
    else
      removeFromCart(item._id);
  }
  const handleIncrementQuantity = (item) => {
    // if(quantity>1)
    updateCart(item._id, item.quantity + 1);
    // else
    //   removeFromCart();
  }
  return (
    <div
      className={`fixed top-0 right-0 h-full md:w-[90%] sm:w-full  max-w-md bg-white dark:bg-gray-200 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      {cartItems.length === 0 ? (
        <div className="p-6 flex justify-between">
          <h2 className="text-lg font-semibold text-center">Your Cart is Empty.</h2>
           <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-4 py-4 text-center">
            <h2 className="text-xl font-semibold ">Your Cart</h2>
            <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
            {cartItems.map((item) => (
               <>
              <div
                key={item._id}
                className="flex items-center justify-between  p-2 rounded-md"
              >
                <div className='flex items-center'>

                  <img src={item.image} className='w-20' alt="" />
                  <div className='flex flex-col gap-x-3'>

                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center justify-between border-gray-300 border  w-[100px]">
                      <button className="px-2 py-1  text-lg font-bold w-full hover:bg-gray-400 hover:text-white" onClick={() => handleDecrementQuantity(item)}>-</button>
                      <span className="text-center  w-full">{item.quantity}</span>
                      <button className=" px-2 py-1  text-lg font-bold w-full hover:bg-gray-400 hover:text-white" onClick={() => handleIncrementQuantity(item)}>+</button>
                    </div>

                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold">${item.offerPrice}</span>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 hover:cursor-pointer font-light text-red-600"
                  >
                    <CircleXIcon />
                  </button>
                </div>
              </div>
                <hr className='font-bold h-full w-full text-gray-400'/>
               </>
            ))}
          </div>

          <div className="p-4 mt-2">
            <div className="flex justify-between font-medium">
              <h3>Total:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <button
              onClick={clearCart}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
