
import React, { useState, useRef } from 'react';

const DropdownMenu = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showProductCategories, setShowProductCategories] = useState(false);
  const [showRelatedProducts, setShowRelatedProducts] = useState(false);
  const [showCustomerReviews, setShowCustomerReviews] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showBestSellers, setShowBestSellers] = useState(false);

  const allProductsTimeoutRef = useRef(null);
  const brandsTimeoutRef = useRef(null);
  const bestSellersTimeoutRef = useRef(null);

  const handleMouseEnter = (setStateFunc, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setStateFunc(true);
  };

  const handleMouseLeave = (setStateFunc, timeoutRef) => {
    timeoutRef.current = setTimeout(() => {
      setStateFunc(false);
    }, 500); // 0.5-second delay
  };

  return (
    <nav className="bg-[#1c085d] p-4 font-abc text-white">
      <ul className="flex space-x-16 ">
        <li
          className="relative z-40" 
          onMouseEnter={() => handleMouseEnter(setShowAllProducts, allProductsTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setShowAllProducts, allProductsTimeoutRef)}
        >
          <span className="text-white cursor-pointer text-xl">All Products</span>
          {showAllProducts && (
            <ul className="absolute left-0 mt-2 w-48 bg-white  shadow-lg rounded-md">
              <li
                className="px-4 py-4 hover:bg-gray-200 text-[#ea001b] relative"
                onMouseEnter={() => setShowProductCategories(true)}
                onMouseLeave={() => setShowProductCategories(false)}
              >
                Product Categories
                {showProductCategories && (
                  <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 3</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 4</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 5</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 6</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 7</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Category 8</li>
                  </ul>
                )}
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 text-[#ea001b] relative"
                onMouseEnter={() => setShowRelatedProducts(true)}
                onMouseLeave={() => setShowRelatedProducts(false)}
              >
                Related Products
                {showRelatedProducts && (
                  <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Related 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Related 2</li>
                  </ul>
                )}
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 text-[#ea001b] relative"
                onMouseEnter={() => setShowCustomerReviews(true)}
                onMouseLeave={() => setShowCustomerReviews(false)}
              >
                Customer Reviews
                {showCustomerReviews && (
                  <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Customer 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Customer 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">Customer 3</li>
                  </ul>
                )}
              </li>

            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(setShowBrands, brandsTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setShowBrands, brandsTimeoutRef)}
        >
          <span className="text-white cursor-pointer text-xl">Brands</span>
          {showBrands && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              {['Brand1', 'Brand2', 'Brand3'].map((brand) => (
                <li key={brand} className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(setShowBestSellers, bestSellersTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setShowBestSellers, bestSellersTimeoutRef)}
        >
          <span className="text-white cursor-pointer text-xl">Best Sellers</span>
          {showBestSellers && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              {['Product1', 'Product2', 'Product3'].map((product) => (
                <li key={product} className="px-4 py-2 hover:bg-gray-200 text-[#ea001b]">
                  {product}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default DropdownMenu;

