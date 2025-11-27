import { ADD_TO_CART, CLEAR_CART, INIT_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "./const";



const CartReducer = (state , action) => {
    switch(action.type) {
        
        case ADD_TO_CART : {
            const product = action.payload;

            const existingItem = state.items.find(item => item.id === product.id);

            let newItems;

            if(existingItem) {
                 newItems = state.items.map(item => item.id === product.id  ? {...item , stock : item.stock+1} : item )
            }else {
                 newItems = [...state.items , {...product , stock : 1}] 
            }

            const totalQuantity = newItems.reduce((sum , item) => sum  + item.stock , 0);

            const totalPrice = newItems.reduce((sum , item) => sum + item.stock * item.price , 0);

            return {
                items : newItems,
                totalQuantity : totalQuantity,
                totalPrice : totalPrice
            }
        }
        
        case REMOVE_TO_CART : {
            const newItems = state.items.filter(item => item.id !== action.payload.id)

            const totalQuantity = newItems.reduce((sum, item) => sum + item.stock , 0)

            const totalPrice = newItems.reduce((sum , item) => sum + item.stock * item.price , 0)

            return {
                items : newItems,
                totalPrice: totalPrice,
                totalQuantity:totalQuantity
            }
        }
        case UPDATE_TO_CART : {
            const [productId , stock ] = action.payload;

            if(stock <= 0) {
                return CartReducer(state , {
                    type : "REMOVE_TO_CART",
                    payload: productId
                });
            
            }

            const newItems = state.items.map(item => item.id === productId ? {...item , stock} : item );


            const totalPrice = newItems.reduce((sum , item) => sum + item.price * item.stock , 0) ;

            const totalQuantity = newItems.reduce((sum , item) => sum + item.stock , 0)

            return {
                items : newItems,
                totalPrice: totalPrice,
                totalQuantity: totalQuantity,
            } 
        }

        case CLEAR_CART : {
            return {
                items : [],
                totalPrice : 0,
                totalQuantity : 0, 
            }
        }
        case INIT_CART : {
            return action.payload;
        }

        default : 
            return state;
        
    }
}

export default CartReducer;