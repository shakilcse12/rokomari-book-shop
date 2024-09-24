import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/books.json'); // Adjust path as necessary
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Our Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <div key={book.bookId} className="bg-white shadow-lg rounded-lg p-4">
            {/* Use the image URL directly here */}
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-bold">{book.title}</h3>
            <p>{book.author}</p>
            <p>Category: {book.category}</p>
            <p>Rating: {book.rating}</p>
            <Link to={`/book/${book.bookId}`}>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Book Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
