import { createContext, useState } from "react";

const AppDataContext = createContext();

export const AppDataContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
        calculateTotal([...cart, product]);
    };

    const calculateTotal = (updatedCart) => {
        const newTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(newTotal);
    };

    const clearCart = () => {
        setCart([]);
        setTotal(0);
    }

    const loginUser = (userData) => {
        setUser(userData);
    };

    const logoutUser = () => {
        setUser(null);
        clearCart();
    };

    return (
        <AppDataContext.Provider
            value={{
                user,
                cart,
                total,
                addToCart,
                loginUser,
                logoutUser,
                clearCart,
            }}>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppDataContext;