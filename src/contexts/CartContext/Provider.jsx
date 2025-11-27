import { useEffect, useMemo, useReducer } from "react";
import PropTypes from "prop-types";


import CartContext from "./Context";
import CartReducer from "@/pages/ShoppingCart/reducer";
import { ADD_TO_CART, CART_STORAGE_KEY, CLEAR_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "@/pages/ShoppingCart/const";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

    const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState, (initial) => {
        try {
            const saved = localStorage.getItem(CART_STORAGE_KEY);
            return saved ? JSON.parse(saved) : initial
        } catch (error) {
            console.error("fail to load card from localstorage", error);
            return initial
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
        } catch (error) {
            console.error("fail to load card from localstorage", error);
        }
    }, [state])

     const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    }

    const removeToCart = (productId) => {
        dispatch({ type: REMOVE_TO_CART, payload: { id : productId}});
    }

    const updateToCart = (productId, stock) => {
        dispatch({ type: UPDATE_TO_CART, payload: [ productId, stock ] })
    };
    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    const value = useMemo(() => ({ 
        ...state,
        addToCart,
        removeToCart,
        updateToCart,
        clearCart
    }), [state])

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );


};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CartProvider;