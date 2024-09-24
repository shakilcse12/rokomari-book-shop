import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BookShop</div>
        <ul className="flex space-x-6">
          <li><Link exact to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}>Home</Link></li>
          <li><Link to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}>About</Link></li>
          <li><Link to="/blog" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}>Blog</Link></li>
          <li><Link to="/faq" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-600"}>FAQ</Link></li>
        </ul>
        <div>
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded">Buy Book</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
