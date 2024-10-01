import { createContext, useReducer } from "react";

const AppDataContext = createContext();

// Definimos las acciones que nuestro reducer manejará
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

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
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                cart: [],
                total: 0
            };
        default:
            return state;
    }
};

export const AppDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, {
        user: null,
        cart: [],
        total: 0
    });

    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
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

    const loginUser = (userData) => {
        dispatch({ type: LOGIN_USER, payload: userData });
    };

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER });
    };

    return (
        <AppDataContext.Provider
            value={{
                user: state.user,
                cart: state.cart,
                total: state.total,
                addToCart,
                quantity,
                removeFromCart,
                loginUser,
                logoutUser,
                clearCart,
            }}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppDataContext;