import bookImage1 from "../assets/book2.jpeg";
import bookImage2 from "../assets/book1.jpeg";

const books = [
    { id: 1, title: "Book 1", author: "Author 1", category: "Fiction", image: {bookImage1}, rating: 4.5 },
    { id: 2, title: "Book 2", author: "Author 2", category: "Mystery", image: {bookImage2}, rating: 4.2 },
  ];
  
  const Books = () => {
    return (
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Our Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold">{book.title}</h3>
              <p>{book.author}</p>
              <p>Category: {book.category}</p>
              <p>Rating: {book.rating}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Book Details</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Books;
  