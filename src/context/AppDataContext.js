import { createContext, useReducer, useContext, useEffect } from "react";
import { UserContext } from './UserContext';
import firestore from "@react-native-firebase/firestore";

const AppDataContext = createContext();

// Acciones del reducer
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ADD_PURCHASE = 'ADD_PURCHASE';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
const SET_CART = 'SET_CART';
const SET_FAVORITES = 'SET_FAVORITES'; // Nueva acción para establecer los favoritos

// Calcula el total del carrito
const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
};

// Reducer
const appReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;
            if (!product || !product.id) {
                console.error("El producto es inválido:", product);
                return state;
            }
            if (typeof product.id !== 'string' || !product.id.trim()) {
                console.error("El ID del producto es inválido:", product.id);
                return state;
            }
            firestore().collection('cart').doc(product.id).set({
                ...product,
                quantity: 1
            });
            return state;
        }
        case UPDATE_QUANTITY: {
            const { productId, amount } = action.payload;
            const cartRef = firestore().collection('cart').doc(productId);
            cartRef.get().then((snapshot) => {
                if (snapshot.exists) {
                    const currentQuantity = snapshot.data().quantity || 0;
                    cartRef.update({
                        quantity: Math.max(0, currentQuantity + amount)
                    });
                }
            });
            return state;
        }
        case REMOVE_FROM_CART: {
            firestore().collection('cart').doc(action.payload).delete();
            return state;
        }
        case CLEAR_CART: {
            firestore().collection('cart').get().then(snapshot => {
                const batch = firestore().batch();
                snapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
                return batch.commit();
            });
            return state;
        }
        case ADD_PURCHASE: {
            const purchasesRef = firestore().collection('purchases');
            purchasesRef.add({ items: state.cart });
            firestore().collection('cart').get().then(snapshot => {
                const batch = firestore().batch();
                snapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
                return batch.commit();
            });
            return { ...state, cart: [], total: 0 };
        }
        case ADD_TO_FAVORITES: {
            const { userId, product } = action.payload;
            const favoritesRef = firestore().collection('favorites').doc(userId);
            favoritesRef.set({
                [product.id]: product
            }, { merge: true });
            return state;
        }
        case REMOVE_FROM_FAVORITES: {
            const { userId, productId } = action.payload;
            firestore().collection('favorites').doc(userId).update({
                [productId]: firestore.FieldValue.delete()
            });
            return state;
        }
        case SET_CART: {
            return { ...state, cart: action.payload, total: calculateTotal(action.payload) };
        }
        case SET_FAVORITES: {
            return { ...state, favorites: action.payload }; // Establecer favoritos
        }
        default:
            return state;
    }
};

// Proveedor del contexto de datos de la app
export const AppDataContextProvider = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    const [state, dispatch] = useReducer(appReducer, {
        cart: [],
        total: 0,
        favorites: [], // Cambiar de objeto a array
        purchases: [],
    });

    // Escucha en Firestore para obtener el carrito
    useEffect(() => {
        const cartRef = firestore().collection('cart');
        const unsubscribe = cartRef.onSnapshot(snapshot => {
            const cartData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            dispatch({ type: SET_CART, payload: cartData });
        });

        return () => unsubscribe(); // Limpieza de la suscripción
    }, []);

    // Escucha en Firestore para obtener los favoritos
    useEffect(() => {
        if (currentUser) {
            const favoritesRef = firestore().collection('favorites').doc(currentUser.email);
            const unsubscribe = favoritesRef.onSnapshot(snapshot => {
                if (snapshot.exists) {
                    const favoritesData = snapshot.data();
                    const favoritesArray = Object.keys(favoritesData).map(key => ({
                        id: key,
                        ...favoritesData[key]
                    }));
                    dispatch({ type: SET_FAVORITES, payload: favoritesArray });
                } else {
                    dispatch({ type: SET_FAVORITES, payload: [] }); // Sin favoritos
                }
            });

            return () => unsubscribe(); // Limpieza de la suscripción
        }
    }, [currentUser]);

    const addToCart = (product) => {
        console.log("Intentando agregar al carrito:", product);
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
                favorites: state.favorites,
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
