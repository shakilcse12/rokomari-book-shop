import React from 'react';
import notFoundImage from '../assets/NotFoundImage.png'; 

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={notFoundImage} alt="404 Not Found" className="w-1/4 mb-8" />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mt-2">Page not found!</p>
    </div>
  );
};

export default NotFoundPage;
