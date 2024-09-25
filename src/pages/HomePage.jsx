import React, {useRef} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bookImage1 from "../assets/book2.jpeg";
import bookImage2 from "../assets/book4.jpeg";
import bookImage3 from "../assets/book3.jpeg";
import Books from "../components/Books.jsx";

const HomePage = () => {
   
   const booksRef = useRef(null);

   const scrollToBooks = () => {
     if (booksRef.current) {
       booksRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   };

  return (
    <div className="container justify-between items-center lg:items-start mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 lg:px-12 py-12 lg:py-6">
      <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Unlock a World of Stories – Find Your Next Favorite Book at Rokomari
        </h1>
        <p className="text-lg mb-6">
          Discover a world of books, explore new genres, and dive into fantastic stories tailored just for you.
        </p>
        <button onClick={scrollToBooks} className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
          Buy Book
        </button>
      </div>

      
      <div className="lg:w-1/2 w-full">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          className="rounded-lg shadow-lg"
        >
          <div>
            <img src={bookImage1} alt="Book 1" className="w-full h-auto" />
          </div>
          <div>
            <img src={bookImage2} alt="Book 2" className="w-full h-auto" />
          </div>
          <div>
            <img src={bookImage3} alt="Book 3" className="w-full h-auto" />
          </div>
        </Carousel>
      </div>
      </div>

      <div ref={booksRef} className="px-12">
        <Books></Books>
      </div>
    </div>
  );
};

export default HomePage;
