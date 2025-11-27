
import { ShoppingCart } from "lucide-react";
import CartDropDown from "./CartDropDown";
import { useState } from "react";
function Header() {

    const [isOpenCart , setIsOpenCart] = useState(false);

    const handleClickOpen = () => {
        setIsOpenCart(!isOpenCart);
    }

    const handleClickClose = () => {
        setIsOpenCart(false);
    }

    return (
        <div className = " relative w-full h-30 flex gap-50 justify-around items-center bg-amber-200">
            <h1>Shopping cart</h1>
            <button onClick={handleClickOpen} className="w-20 h-20 flex items-center">
                <ShoppingCart className="w-10 h-10">
                </ShoppingCart> 
            </button>
           {isOpenCart && (
            <>
                 
                <CartDropDown  isOpen={isOpenCart} onClose={handleClickClose}/>
            </>) }
        </div>
    );

}
export default Header;