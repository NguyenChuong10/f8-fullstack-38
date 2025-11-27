import { useEffect } from "react";
import {useState} from "react";
import ProductCard from "../ProductCard";

function ShoppingCart() {
  
  const [products , setProducts] = useState([]);
  const [loading , setLoading]  = useState(true);
  const [error , setError] = useState(null);


  useEffect(()=> {
    const fetchProducts = async () => {
      try{
        setLoading(true)
        const response = await fetch('https://api01.f8team.dev/api/products')
        if(!response.ok) {
          throw new Error(`HTTP error ! status : ${response.status}`)
        }
        const data = await response.json();
        if(data.status === "success" && data.data && data.data.items){
          setProducts(data.data.items);
        }else if(data.data && Array.isArray(data.data)) {
          setProducts(data);
        }else{
          throw new Error('Invalid data structure from api')
        }
        setError(null)
      }catch(err) {
      console.error('Error fetching products : ' , err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
};
    fetchProducts();   
},[])

 if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-blue-500 border-r-transparent mb-4"></div>
          <p className="text-lg text-gray-600">Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <svg className="mx-auto h-12 w-12 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Lỗi tải dữ liệu</h3>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-lg text-gray-600">Không có sản phẩm nào</p>
        </div>
      </div>
    );
  }


  return(
      <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Sản phẩm của chúng tôi
        </h2>
        <p className="text-gray-600 text-center">
          Tìm thấy {products.length} sản phẩm
        </p>
      </div>
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render từng ProductCard */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;