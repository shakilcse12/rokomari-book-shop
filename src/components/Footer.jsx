const Footer = () => {
  return (
    <div className="container flex flex-col justify-between px-6 pt-3 pb-3 text-white h-54 bg-gray-600">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2>All kinds of book is available here</h2>
          <h2>Best books are available</h2>
        </div>
        <div className="flex">
          <li>Home</li>
          <li className="mx-3">About</li>
          <li>Faq</li>
        </div>
        <div></div>
      </div>
      <div className="flex font-bold items-center justify-center mt-auto">
        Copyright included text
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
