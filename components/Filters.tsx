import React from 'react';

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <div className='bg-white'>
      <div className="w-full mb-5">
        <h1 className="text-btn-background font-bold p-2 bg-blue-700 rounded-t-md">Categories</h1>
      </div>

      <div className="w-full mb-5">
        <h1 className="text-btn-background font-bold p-2 bg-blue-700 rounded-t-md">Brands</h1>
      </div>

      <div className="w-full mb-5">
        <h1 className="text-btn-background font-bold p-2 bg-blue-700 rounded-t-md">Price Range</h1>
      </div>

      <div className="w-full mb-5">
        <h1 className="text-btn-background font-bold p-2 bg-blue-700 rounded-t-md">Condition</h1>
      </div>
    </div>
  );
};

export default Filters;
