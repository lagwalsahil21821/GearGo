import React, { createContext, useContext, useState } from 'react';

export type CartItem = {
  id: string;
  color: string;
  size: string;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, color: string, size: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

export const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const persist = (items: CartItem[]) => {
    setCart(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const addToCart = (item: CartItem) => {
    persist((prev => {
      const idx = cart.findIndex(
        c => c.id === item.id && c.color === item.color && c.size === item.size
      );
      if (idx > -1) {
        const updated = [...cart];
        updated[idx].quantity += item.quantity;
        return updated;
      }
      return [...cart, item];
    })(cart));
  };

  const removeFromCart = (id: string, color: string, size: string) => {
    persist(cart.filter(c => !(c.id === id && c.color === color && c.size === size)));
  };

  const clearCart = () => {
    persist([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
