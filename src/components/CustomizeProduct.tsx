const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 bg-red-500 relative cursor-pointer">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 bg-cyan-500 relative cursor-pointer"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 bg-yellow-500 relative cursor-not-allowed">
          <div className="absolute w-10 h-[2px]  top-1/2 bg-red-800 rotate-45 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-pink-500 text-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-pink-500 bg-pink-500 text-white rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 bg-pink-200 text-white rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProduct;
