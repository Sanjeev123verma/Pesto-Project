import React from 'react';
import { MdPestControlRodent } from "react-icons/md"; <MdPestControlRodent />

const categories = [
  { name: 'Rodent Control', icon: MdPestControlRodent,},
  { name: 'Roach Control', icon: MdPestControlRodent,},
  { name: 'Mosquito Control', icon: MdPestControlRodent,},
  { name: 'Lizard Control', icon: MdPestControlRodent,},
  { name: 'Termite Control', icon: MdPestControlRodent,},
  { name: 'Bedbugs Control', icon: MdPestControlRodent,},
  { name: 'Fly Control', icon: MdPestControlRodent,},
  { name: 'Snake Control Products ', icon: MdPestControlRodent,},
  { name: 'Pest Control Equipment', icon: MdPestControlRodent,},
  { name: 'Agro Chemical Products', icon: MdPestControlRodent,},
];


const Categories = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-2 ">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <div 
            key={category.name}
            className={`relative flex flex-col items-center justify-center ${category.color} p-8 rounded-lg shadow-2xl transition-transform cursor-pointer`}
          >
            <div className="relative flex items-center justify-center mb-2 w-20 h-20 bg-white rounded-full shadow-2xl transition-transform duration-200 transform hover:-translate-y-4">
              <IconComponent className="text-3xl text-gray-800" />
            </div>
            <h3 className="text-xl  font-abc font-semibold text-[#1c085d]">{category.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;


