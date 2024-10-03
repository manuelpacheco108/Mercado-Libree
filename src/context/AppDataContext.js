import { createContext, useReducer } from "react";

const AppDataContext = createContext();

// Definimos las acciones que nuestro reducer manejará
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Función para calcular el total del carrito
const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
};

// Definimos nuestro reducer
const appReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
            let updatedCart;
            if (existingProductIndex !== -1) {
                updatedCart = state.cart.map((item, index) => 
                    index === existingProductIndex 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
            }
            return {
                ...state,
                cart: updatedCart,
                total: calculateTotal(updatedCart)
            };
        }
        case UPDATE_QUANTITY: {
            const updatedCart = state.cart.map(item => 
                item.id === action.payload.productId
                    ? { ...item, quantity: Math.max(0, item.quantity + action.payload.amount) }
                    : item
            ).filter(item => item.quantity > 0);
            return {
                ...state,
                cart: updatedCart,
                total: calculateTotal(updatedCart)
            };
        }
        case REMOVE_FROM_CART: {
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,
                cart: updatedCart,
                total: calculateTotal(updatedCart)
            };
        }
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0
            };
        case ADD_TO_FAVORITES: {
            const existingFavoriteIndex = state.favorites.findIndex(item => item.id === action.payload.id);
            let updatedFavorites;
            if (existingFavoriteIndex === -1) {
                updatedFavorites = [...state.favorites, action.payload];
            } else {
                updatedFavorites = state.favorites; // No agregar duplicados
            }
            return {
                ...state,
                favorites: updatedFavorites
            };
        }
        case REMOVE_FROM_FAVORITES: {
            const updatedFavorites = state.favorites.filter(item => item.id !== action.payload);
            return {
                ...state,
                favorites: updatedFavorites
            };
        }
        default:
            return state;
    }
};

export const AppDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, {
        cart: [],
        total: 0,
        favorites: []  // Inicializamos el estado de favoritos
    });

    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    };

    const addToFavorites = (product) => {
        dispatch({ type: ADD_TO_FAVORITES, payload: product });
    };

    const removeFromFavorites = (productId) => {
        dispatch({ type: REMOVE_FROM_FAVORITES, payload: productId });
    };

    const quantity = (productId, action) => {
        dispatch({ 
            type: UPDATE_QUANTITY, 
            payload: { productId, amount: action === 'add' ? 1 : -1 } 
        });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: REMOVE_FROM_CART, payload: productId });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    return (
        <AppDataContext.Provider
            value={{
                cart: state.cart,
                total: state.total,
                favorites: state.favorites,
                addToCart,
                addToFavorites,
                removeFromFavorites,
                quantity,
                removeFromCart,
                clearCart,
            }}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppDataContext;
