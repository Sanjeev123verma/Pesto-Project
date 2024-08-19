import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  // Ensure price is valid and properly formatted
  const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0.00';

  return (
    
      <div className="max-w-[300px] overflow-hidden shadow-2xl mx-auto my-6 bg-blue-100 hover:border-2 border-blue-300">
        <img
          className="w-full hover:scale-95 transform transition-transform duration-300"
          src={product.image}
          alt={product.name}
        />
        <div className="px-4 py-1 md:py-4">
          <div className="font-bold text-xl mb-1">{product.name}</div>
          <p className="text-gray-700 text-base">
            {product.description}
          </p>
        </div>
        <div className="px-6 pb-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ₹{price}
          </span>
        </div>
        <div className="pb-3">
          <button
            className="bg-[#1c085d] hover:bg-[#ea001b] text-white px-2 py-1 rounded-full"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
  );
};

export default ProductCard;







// <Link to={`/product/${product.id}`} className=''>
//     <div className="max-w-[300px]  overflow-hidden shadow-2xl mx-auto my-6 bg-blue-100 hover:border-2 border-blue-300">
//       <img className="w-full hover:scale-95 transform transition-transform duration-300" src={product.image} alt={product.name} />
//       <div className="px-4 py-1 md:py-4 ">
//         <div className="font-bold text-xl mb-1">{product.name}</div>
//         <p className="text-gray-700 text-base">
//           {product.description}
//         </p>
//       </div>
//       <div className="px-6 pb-1">
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           ₹{product.price}
//         </span>
//       </div>
//       <div className='pb-3'>
//       <button className=' bg-[#1c085d] hover:bg-[#ea001b] text-white px-2 py-1 rounded-full' onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     </div>
//     </Link>
