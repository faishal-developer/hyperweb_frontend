import React from 'react';

const SearchBox = ({value,onChange,handleSubmit}) => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <label htmlFor="search" className="block text-sm font-medium text-gray-600">
        Search
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {/* <div onClick={handleSubmit} className="absolute w-5 inset-y-0 left-0 pl-3 flex items-center pointer-events-none cursor-pointer">
          Search
        </div> */}
        <input
          type="text"
          id="search"
          name="search"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search for something..."
        //   value={value}
          onKeyDown={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
