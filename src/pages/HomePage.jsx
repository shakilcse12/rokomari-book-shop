import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

const Homepage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Book Shop</h1>
      <p>Discover amazing books today!</p>
      <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded">Browse Books</button>
    </div>
  );
};

export default Homepage;
