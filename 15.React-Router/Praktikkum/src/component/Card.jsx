const Card = () => {
  return (
    <div className="w-full flex justify-around p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-96">
        <img
          src="/public/image1.png"
          alt="..."
          className="w-96 h-80 object-cover object-center "
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-2">Card title</h5>
          <p className="text-gray-600 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Go somewhere
            </a>
            <span className="text-gray-500 text-sm">9 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
