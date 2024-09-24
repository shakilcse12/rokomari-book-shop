import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
        
        <div className="flex flex-col text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-2">All kinds of books are available here</h2>
          <h2 className="text-md">Best books at affordable prices</h2>
        </div>

        <ul className="flex space-x-6 mb-6 lg:mb-0">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
        </ul>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-500 pt-4 text-center">
        <p className="text-sm font-bold">&copy; {new Date().getFullYear()} BookShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
