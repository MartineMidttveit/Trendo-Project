import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const findCartItem = (cart, itemId) => cart.find(item => item.id === itemId);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, quantity } = action.payload;
      const existingItem = findCartItem(state.cart, item.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...item, quantity }],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
      };
    }

    case 'INCREASE_QUANTITY': {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case 'DECREASE_QUANTITY': {
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };
    }

    default:
      return state;
  }
};

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('@trendo-v1-cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cart: loadCartFromLocalStorage(),
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('@trendo-v1-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addItemToCart = (item, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, quantity } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
  };

  const totalPrice = state.cart.reduce(
    (total, item) => total + 2 + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }

  return context;
};
