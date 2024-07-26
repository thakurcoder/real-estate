import React,{useState} from 'react';
import { listData } from "../lib/dummyData.js";
import Card from "./Card";
import Filter from './Filter.jsx';
import Map from './Map.jsx';

function List() {
    const [showFilter, setShowFilter] = useState(false);
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
          <Filter />
        </div>
      )}
      <div className='md:hidden lg:flex'>
        <Filter  />
        </div>
      </div>
      <div className='lg:w-3/4 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5'>
        <div className='w-full lg:w-2/3 flex flex-col space-y-5'>
          {listData.map((e) => (
            <Card key={e.id} data={e} />
          ))}
        </div>
        <div className='w-full lg:w-1/3'>
          <Map items={listData} />
        </div>
      </div>
    </div>
  );
}

export default List;
