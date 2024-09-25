import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ROUTES } from '../routes';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-8">
        
      <NavLink to={ROUTES.HOME} className="text-2xl font-bold">
          Rokomari
        </NavLink>

        
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>

        
        <ul className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <NavLink 
              exact="true" 
              to={ROUTES.HOME} 
              className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={ROUTES.ABOUT} 
              className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={ROUTES.BLOG} 
              className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={ROUTES.FAQ} 
              className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}
            >
              FAQ
            </NavLink>
          </li>
        </ul>

        
        <div className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded">Buy Book</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
