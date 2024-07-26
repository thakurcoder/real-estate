import React from 'react';

function Card(props) {
  return (
    <div className='p-2 lg:p-5 flex bg-white rounded-lg shadow-lg'>
      <div className=' w-60  mr-5'>
        <img className='w-full h-32 lg:h-48  object-cover rounded-md' src={props.data.img} alt={props.data.title} />
      </div>
      <div className='flex flex-col justify-between'>
        <h1 className=' text-sm lg:text-xl font-bold mb-2'>{props.data.title}</h1>
        <h2 className=' text-sm lg:text-lg text-gray-700 mb-1'>{props.data.address}</h2>
        <h2 className=' text-sm lg:text-lg text-gray-700 mb-1'>Price: ${props.data.price}</h2>
        <h2 className=' text-sm lg:text-lg text-gray-700 mb-1'>Bedrooms: {props.data.bedroom}</h2>
        <h2 className=' text-sm lg:text-lg text-gray-700'>Bathrooms: {props.data.bathroom}</h2>
      </div>
    </div>
  );
}

export default Card;
