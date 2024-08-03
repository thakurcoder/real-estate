import React from 'react';

function Card(props) {
  return (
    <div className='p-4 flex flex-col md:flex-row bg-white rounded-lg shadow-lg'>
      <div className='w-full md:w-60 mb-4 md:mb-0 md:mr-5'>
        <img className='w-full h-40 md:h-48 object-cover rounded-md' src={props.data.img} alt={props.data.title} />
      </div>
      <div className='flex flex-col justify-between'>
        <h1 className='text-lg md:text-xl font-bold mb-2'>{props.data.title}</h1>
        <h2 className='text-sm md:text-lg text-gray-700 mb-1'>{props.data.address}</h2>
        <h2 className='text-sm md:text-lg text-gray-700 mb-1'>Price: ${props.data.price}</h2>
        <h2 className='text-sm md:text-lg text-gray-700 mb-1'>Bedrooms: {props.data.bedroom}</h2>
        <h2 className='text-sm md:text-lg text-gray-700'>Bathrooms: {props.data.bathroom}</h2>
      </div>
    </div>
  );
}

export default Card;
