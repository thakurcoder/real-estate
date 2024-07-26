import React from 'react';

function Filter() {
  return (
    <div className="w-2/3 p-5 bg-white rounded-lg shadow-lg mx-auto">
      <h1 className="text-2xl font-bold mb-5">
        Search results for
      </h1>
      <div className="flex flex-wrap gap-5">
        <div className="flex-grow mb-5">
          <label htmlFor="city" className="block text-lg font-semibold mb-2">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-grow mb-5">
          <label htmlFor="type" className="block text-lg font-semibold mb-2">Type</label>
          <select name="type" id="type" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex-grow mb-5">
          <label htmlFor="property" className="block text-lg font-semibold mb-2">Property</label>
          <select name="property" id="property" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex-grow mb-5">
          <label htmlFor="minPrice" className="block text-lg font-semibold mb-2">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-grow mb-5">
          <label htmlFor="maxPrice" className="block text-lg font-semibold mb-2">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-grow mb-5">
          <label htmlFor="bedroom" className="block text-lg font-semibold mb-2">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex mb-5 items-end">
          <button className="w-28 p-2 bg-amber-400 text-white font-semibold rounded-md hover:bg-amber-500 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
