import useCart from "@/hooks/useCart";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    }
    return (
        <div className="relative flex justify-center w-60 h-100 bg-amber-200">
            <img className="w-4/5 h-1/2 mt-10 rounded-2xl " src={product.thumbnail} alt="" />
            <h3 className="absolute bottom-30">{product.title}</h3>
            <p className="absolute  bottom-20">{product.price}</p>
            <button className="absolute bottom-2 " onClick={() => {handleAddToCart()}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
            >addToCart</button>
        </div>
    )
}

ProductCard.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.oneOfType([PropTypes.string , PropTypes.number]).isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        thumbnail:PropTypes.string
    })
} ;
export default ProductCard;