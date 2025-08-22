import React from "react";

export default function Navbar() {
  return (
    <nav className="relative bg-white ] z-20">
      
      <img
        src="/images/Asset 1.png" 
        alt="Left Corner"
        className="absolute top-0 left-0 w-[90px] h-[85px] object-contain"
      />

      
      <img
        src="/images/Asset 2.png" 
        alt="Right Corner"
        className="absolute top-0 right-0 w-[200px] h-[250px] object-contain"
      />

      
      <div className="flex items-center justify-between px-8 py-3 relative z-30">
        
        <div className="flex items-center space-x-3">
          <div className="ml-12">
            <img src="/images/logo-1 1.png" alt=""
            className="w-[220px] h-[80px] object-contain"/>
          </div>
        </div>

        
        <ul className="flex space-x-8 text-[15px] text-gray-700 font-normal items-center">
          <li className="hover:text-cyan-700 cursor-pointer">About Us</li>
          <li className="hover:text-cyan-700 cursor-pointer">Services</li>
          <li className="hover:text-cyan-700 cursor-pointer">Team</li>
          <li className="hover:text-cyan-700 cursor-pointer">Clients</li>
          <li>
            <button className="ml-2 px-5 py-2  text-purple-800 font-medium  transition">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
