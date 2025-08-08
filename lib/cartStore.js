import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],

  // Initialize cart from localStorage (to be called on client)
  hydrateCart: () => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('cartItems');
        if (stored) {
          set({ cartItems: JSON.parse(stored) });
        }
      } catch (e) {
        console.error('Failed to hydrate cart:', e);
      }
    }
  },

  addToCart: (product) =>
    set((state) => {
      const exists = state.cartItems.find((item) => item.id === product.id);

      let updatedCart;
      if (exists) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }

      return { cartItems: updatedCart };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
        )
        .filter(item => item.quantity > 0);

      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }

      return { cartItems: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }
      return { cartItems: updatedCart };
    }),

  clearCart: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cartItems');
    }
    return { cartItems: [] };
  },
}));
