import { CartContext } from "../contexts/CartContext/index.js";
import { useContext } from "react";


const useCart = () => {
    const context = useContext(CartContext);

    if(context === undefined) {
        console.log("useCart must be use from CartProvider")
    }

    return context;
}


export default useCart;