import React from "react";
import { Carousel } from "react-responsive-carousel"; // Example of using react-responsive-carousel package
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bookImage1 from "../assets/book1.jpeg";
import bookImage2 from "../assets/book2.jpeg";
import bookImage3 from "../assets/book1.jpeg";

const HomePage = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 lg:px-12 py-12 lg:py-12">
      {/* Left Section: Text */}
      <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Unlock a World of Stories – Find Your Next Favorite Book at [Bookshop Name]
        </h1>
        <p className="text-lg mb-6">
          Discover a world of books, explore new genres, and dive into fantastic stories tailored just for you.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
          Buy Book
        </button>
      </div>

      {/* Right Section: Slider */}
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
    </section>
  );
};

export default HomePage;
