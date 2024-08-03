import React, { useEffect, useState } from 'react';
import { listData } from "../lib/dummyData.js";
import Card from "./Card";
import Filter from './Filter.jsx';
import Map from './Map.jsx';
import { useLocation } from 'react-router-dom';
import apiRequest from '../lib/apiRequest.js';
import { Link } from 'react-router-dom';

function List() {
  const location = useLocation();
  console.log(location);

  const [query, setQuery] = useState(location.state || {});
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const fetchData = async (queryParams) => {
    try {
      const res = await apiRequest.post("/api/post/getposts", queryParams);
      console.log("res", res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const handleFilterChange = (newFilters) => {
    setQuery(newFilters);
  };

  console.log(data)
  if (data.length == 0){
    return <h1 className='text-center font-bold  text-5xl mt-16'>No item present</h1>
  }
  return (
    <div className='flex flex-col lg:flex-row p-5 space-y-5 lg:space-y-0 lg:space-x-5'>
      <div className='lg:w-1/4'>
        <div className='lg:hidden'>
          <button
            className="bg-amber-400 text-white p-2 rounded-md"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        {showFilter && (
          <div className='lg:w-1/4 lg:block'>
            <Filter onFilterChange={handleFilterChange} />
          </div>
        )}
        <div className='md:hidden lg:flex'>
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className='lg:w-3/4 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5'>
        <div className='w-full lg:w-2/3 flex flex-col space-y-5'>
          {data.map((e) => (
           <Link to={`/${e.id}`} > <Card key={e.id} data={e} /></Link>
          ))}
        </div>
        <div className='w-full lg:w-1/3'>
          <Map items={data} />
        </div>
      </div>
    </div>
  );
}

export default List;
