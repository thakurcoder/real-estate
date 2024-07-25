import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

function Search() {
  const [active, setActive] = useState(true);
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (e) => {
    const newType = e.target.id;
    setActive(newType === "buy");
    setQuery((prev) => ({ ...prev, type: newType }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='p-10 w-full lg:w-2/3'>
      <div className='flex text-xl mb-1'>
        <h1 
          onClick={switchType} 
          id="buy" 
          className={`outline outline-slate-700 p-5 cursor-pointer ${active ? "bg-slate-600 text-white" : "bg-white"}`}
        >
          Buy
        </h1>
        <h1 
          onClick={switchType} 
          id="rent" 
          className={`outline outline-slate-700 p-5  cursor-pointer ${!active ? "bg-slate-600 text-white" : "bg-white"}`}
        >
          Rent
        </h1>
      </div>
      <div>
        <form className='outline outline-slate-700 flex flex-col lg:flex-row items-center justify-evenly p-5'>
          <input 
            className=' w-full h-11 outline-none p-2 mb-4 lg:mb-0 lg:flex-grow' 
            name="location" 
            type="text" 
            placeholder='City Location' 
            value={query.location} 
            onChange={handleChange} 
          />
          <input 
            className=' w-full h-11 outline-none p-2 mb-4 lg:mb-0 lg:w-32' 
            name='minPrice' 
            type="number" 
            min ={0}
            max={1000000000}
            placeholder='Min Price' 
            value={query.minPrice} 
            onChange={handleChange} 
          />
          <input 
            className='w-full h-11 outline-none p-2 mb-4 lg:mb-0 lg:w-32' 
            name="maxPrice" 
            type="number" 
            min ={0}
            max={1000000000}
            placeholder='Max Price' 
            value={query.maxPrice} 
            onChange={handleChange} 
          />
          <button className='text-4xl h-full  w-28 bg-amber-400 flex justify-center items-center'>
            <CiSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
