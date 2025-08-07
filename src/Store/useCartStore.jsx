import React from 'react'
import { create } from 'zustand'

const useCartStore = create((set) => ({

  cartItems: [],

  addToCart: (product) => {
    set((state) => {
      const exists = state.cartItems.find(item => item._id === product._id);
      if (exists) {
        // If exists, increment quantity
        return {
          cartItems: state.cartItems.map(item =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)
        };
      } else {
        // Else, add with quantity 1
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter(items => items._id !== id)
    }));
  },
  updateCart: (id, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) => item._id === id ? { ...item, quantity } : item),
    }))
  },
  clearCart: () =>
    set({
      cartItems: []
    }),

}));

export default useCartStore;