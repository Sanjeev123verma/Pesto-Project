import React from "react";
import ProductCard from "../components/ProductCard";
import Brands from "../components/Brands";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for Product 1.',
    price: '1000',
    image: '/Images/Image1.jpeg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for Product 2.',
    price: '2000',
    image: '/Images/Image2.jpeg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description for Product 3.',
    price: '3000',
    image: '/Images/Image3.jpeg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description for Product 4.',
    price: '4000',
    image: '/Images/Image4.jpeg',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is a description for Product 5.',
    price: '5000',
    image: '/Images/Image5.jpeg',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is a description for Product 6.',
    price: '6000',
    image: '/Images/Image6.jpeg',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is a description for Product 7.',
    price: '7000',
    image: '/Images/Image7.jpeg',
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is a description for Product 8.',
    price: '8000',
    image: '/Images/Image8.jpeg',
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is a description for Product 9.',
    price: '9000',
    image: '/Images/Image1.jpeg',
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'This is a description for Product 10.',
    price: '10000',
    image: '/Images/Image2.jpeg',
  },
  ];

  const Productswithoutnav = () => {
    return (
        <>
         {/* added categories.jsx here */}
     <div className='max-w-[80%] my-8 mx-auto '>
     <h1 className=' font-abc text-2xl font-bold text-white py-4 mb-4 bg-[#1c085d]'> OUR PRODUCTS CATEGORIES </h1>
     <Categories/>
     </div>

       <div className='py-8'>
        <Link to= "/Products" className="block">
     <nav className=" max-w-[60%] mx-auto bg-[#1c085d] text-2xl font-abc">
      <h1 className='text-white font-extrabold py-4'> ALL PRODUCTS </h1>
      </nav>
      </Link>
     </div> 
     <Carousel products={products} />

    
     

     <div className=' w-full py-8 bg-[#fff3bf]'>
     <nav className=" max-w-[60%] mx-auto bg-[#1a185e] text-2xl p-4 my-4 font-abc">
      <h1 className='text-white font-extrabold'> OUR TOP BRANDS </h1>
      </nav>
     <Brands/> 
     {/* used brand.jsx here */}
     </div>  
        </>
    );
  };
   

  export default Productswithoutnav;