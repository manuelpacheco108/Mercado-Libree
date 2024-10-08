import { createContext, useReducer, useContext } from "react";
import { UserContext } from './UserContext';

const AppDataContext = createContext();

const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ADD_PURCHASE = 'ADD_PURCHASE';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
};

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
        case ADD_PURCHASE: {
            return {
                ...state,
                purchases: [...state.purchases, ...state.cart],
                cart: [],
                total: 0
            };
        }
        case ADD_TO_FAVORITES: {
            const { userId, product } = action.payload;
            const existingFavorites = state.favorites[userId] || [];
            const existingFavoriteIndex = existingFavorites.findIndex(item => item.id === product.id);
            let updatedFavorites;
            if (existingFavoriteIndex === -1) {
                updatedFavorites = [...existingFavorites, product];
            } else {
                updatedFavorites = existingFavorites;
            }
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    [userId]: updatedFavorites
                }
            };
        }
        case REMOVE_FROM_FAVORITES: {
            const { userId, productId } = action.payload;
            const updatedFavorites = (state.favorites[userId] || []).filter(item => item.id !== productId);
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    [userId]: updatedFavorites
                }
            };
        }
        default:
            return state;
    }
};

export const AppDataContextProvider = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    const [state, dispatch] = useReducer(appReducer, {
        cart: [],
        total: 0,
        favorites: {},
        purchases: [],
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

    const addPurchase = () => {
        dispatch({ type: ADD_PURCHASE });
    };

    const addToFavorites = (product) => {
        if (currentUser) {
            dispatch({ type: ADD_TO_FAVORITES, payload: { userId: currentUser.email, product } });
        }
    };

    const removeFromFavorites = (productId) => {
        if (currentUser) {
            dispatch({ type: REMOVE_FROM_FAVORITES, payload: { userId: currentUser.email, productId } });
        }
    };

    return (
        <AppDataContext.Provider
            value={{
                cart: state.cart,
                total: state.total,
                purchases: state.purchases,
                favorites: state.favorites[currentUser?.email] || [],
                addToCart,
                addToFavorites,
                removeFromFavorites,
                quantity,
                removeFromCart,
                clearCart,
                addPurchase,
            }}>
            {children}
        </AppDataContext.Provider>
    );
};

export default AppDataContext;
