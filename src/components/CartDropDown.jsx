import PropTypes from 'prop-types';
import useCart from '@/hooks/useCart';
import { X, ShoppingCart, CirclePlus, CircleMinus, Trash2 } from 'lucide-react'

const CartDropDown = ({ isOpen , onClose }) => {

    const { items, totalPrice, updateToCart, removeToCart, totalQuantity , clearCart } = useCart();

    if (!isOpen) return null;

    const RenderProduct = ({item}) => {
        return  (
            <div className="flex gap-10 items-center w-full h-30 bg-white border-b border-gray-200 py-2">
                <div className='ml-3 w-25 h-25 bg-amber-200 rounded overflow-hidden'>
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-blue-600 font-semibold">{item.price.toLocaleString()} đ</p>
                    <div className='flex items-center gap-2'>
                        <button onClick={()=>{updateToCart(item.id , item.stock - 1 )}} 
                                className="hover:text-blue-600">
                            <CircleMinus size={20} />
                        </button>
                        <div className="px-3 py-1 bg-gray-100 rounded">
                            <p className="font-medium">{item.stock}</p>
                        </div>
                        <button onClick={()=>{updateToCart(item.id ,item.stock + 1)}}
                                className="hover:text-blue-600">
                            <CirclePlus size={20} />
                        </button>
                    </div>
                </div>
                <div>
                    <button onClick={() => {removeToCart(item.id)}} 
                            className='pr-3 hover:text-red-600 transition-colors'>
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>
        ) 
    }

    return (
        <div className="absolute top-26 left-110 w-100 h-110 rounded-2xl bg-white shadow-xl z-50 flex flex-col overflow-hidden">
            {/* Header - Cố định */}
            <div className="flex justify-between px-4 py-3 bg-gradient-to-r from-indigo-300 to-purple-400 items-center text-white flex-shrink-0">
                <div className="flex items-center gap-2">
                    <ShoppingCart size={24} />
                    <h3 className='font-sans font-semibold text-lg'>Giỏ hàng</h3>
                </div>
                <button onClick={onClose} className="hover:bg-white/20 rounded p-1 transition-colors"> 
                    <X size={24} />
                </button>
            </div>

            
            {items.length === 0 ? (
                <div className="flex-1 flex items-center justify-center bg-amber-50">
                    <p className="text-gray-400 text-lg">Giỏ hàng trống</p>
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto">
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <RenderProduct item={item}/>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {/* Footer - Cố định ở dưới */}
            <div className='px-4 py-4 flex flex-col gap-3 bg-gray-100 flex-shrink-0 border-t-2'>
                <div className="flex justify-between">
                    <p className="font-medium">Tổng số lượng:</p>
                    <p className="font-bold text-blue-600">{totalQuantity}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium">Tổng tiền:</p>
                    <p className="font-bold text-blue-600">{totalPrice.toLocaleString()} đ</p>
                </div>
                <button 
                    onClick={() => {clearCart()}}
                    className='w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium'
                >
                    Xóa giỏ hàng
                </button>
                <button className='w-full py-2 bg-gradient-to-r from-indigo-400 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium'>
                    Thanh toán
                </button>
            </div>
        </div>
    )
}

CartDropDown.propTypes = {
    isOpen:PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        thumbnail: PropTypes.string
    })
}

export default CartDropDown;