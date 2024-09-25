import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/books.json'); 
      const books = await response.json();
      const foundBook = books.find(b => b.bookId === parseInt(id)); 
      setBook(foundBook);
    };

    fetchBooks();
  }, [id]);

  if (!book) {
    return <div>Book not found!</div>;
  }

  const handleWishToRead = () => {
    Swal.fire({
      title: 'Added to Wishlist!',
      text: `${book.bookId} ${book.bookName} has been successfully added to the Wishlist`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };
  
  const handleAddToCart = () => {
    Swal.fire({
      title: 'Added to Cart!',
      text: `${book.bookId} ${book.bookName} has been successfully added to the Cart`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };
  

  return (
    <div className="container mx-auto p-8 rounded-lg">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <img src={book.image} alt={book.title} className="w-full lg:w-1/3 object-cover" />
        <div className="ml-0 lg:ml-8 p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-base sm:text-lg mb-2"><strong>Author:</strong> {book.author}</p>
          <p className="text-base sm:text-lg mb-2"><strong>Category:</strong> {book.category}</p>
          <p className="text-base sm:text-lg mb-2"><strong>Rating:</strong> {book.rating}</p>
          <p className="text-base sm:text-lg mb-2"><strong>Total Pages:</strong> {book.totalPages}</p>
          <p className="text-base sm:text-lg mb-2"><strong>Publisher:</strong> {book.publisher}</p>
          <p className="text-base sm:text-lg mb-4"><strong>Year:</strong> {book.yearOfPublishing}</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button onClick={handleWishToRead} className="mt-4 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              Wish to Read
            </button>
            <button onClick={handleAddToCart} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
