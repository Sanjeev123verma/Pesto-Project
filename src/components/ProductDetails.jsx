
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    // Fetch product details based on id
    const fetchProductDetails = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    // Here you would typically add the product to a cart
    // For now, we'll just set a flag to show it's been added
    setIsAddedToCart(true);
    
    // In a real app, you might save to localStorage or send to an API
    console.log(`Added ${quantity} of product ${id} to cart`);
    
    // Reset after a short delay
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </div>
      <button onClick={handleAddToCart} disabled={isAddedToCart}>
        {isAddedToCart ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         // Replace this with your actual API call
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         if (!response.ok) {
//           throw new Error('Product not found');
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product);
//       alert('Product added to cart!');
//     }
//   };

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
//   if (!product) return <div className="text-center mt-8">Product not found</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row md:space-x-8">
//         <div className="md:w-1/2">
//           <img 
//             src={product.image} 
//             alt={product.title} 
//             className="w-full h-auto object-contain rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="md:w-1/2 mt-4 md:mt-0">
//           <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//           <p className="text-2xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
//           <p className="mb-4">{product.description}</p>
//           <div className="mb-4">
//             <span className="font-semibold">Category:</span> {product.category}
//           </div>
//           <div className="mb-4">
//             <span className="font-semibold">Rating:</span> {product.rating.rate} ({product.rating.count} reviews)
//           </div>
//           <button 
//             onClick={handleAddToCart}
//             className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
