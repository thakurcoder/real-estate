import React, { useState } from 'react'
import { singlePostData, userData } from '../lib/dummyData'
import Map from './Map'
import Slider from './Slider'

function SinglePage() {

  const [map,setMap] = useState(true)  

  return (
    <div className='w-full h-full m-3 p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
      <div className='w-full lg:w-2/3 space-y-4'>
        {/* Image */}
        <div onClick={()=>setMap(!map)}>
        <Slider   images={singlePostData.images} />
        </div>
        {/* Information */}
        <div className={`bg-white shadow-md rounded-lg p-4 ${map?"w-full":"hidden"}`}>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-semibold'>{singlePostData.title}</h1>
              <h2 className='text-xl text-gray-600'>{singlePostData.address}</h2>
              <h3 className='text-xl text-green-600'>${singlePostData.price}</h3>
            </div>
            <div className='text-center'>
              <img className='w-28 h-28 rounded-full object-cover mb-2' src={userData.img} alt="User" />
              <h1 className='text-lg font-medium'>{userData.name}</h1>
            </div>
          </div>
          <p className='mt-4 text-gray-700'>{singlePostData.description}</p>
        </div>
      </div>

      <div className={`w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4 space-y-4 ${map?"w-full":"hidden"}`}>
        <h1 className='text-xl font-semibold mb-2'>General</h1>

        <div>
          <h2 className='text-lg font-medium'>Room Size</h2>
          <div className='flex gap-4 mt-2'>
            <h3 className='text-gray-600'>sqft: {singlePostData.size}</h3>
            <h3 className='text-gray-600'>bed: {singlePostData.bedRooms}</h3>
            <h3 className='text-gray-600'>bathroom: {singlePostData.bathroom}</h3>
          </div>
        </div>

        <div>
          <h2 className='text-lg font-medium'>Nearby Places</h2>
          <div className='flex gap-4 mt-2'>
            <h3 className='text-gray-600'>school: {singlePostData.school}</h3>
            <h3 className='text-gray-600'>bus: {singlePostData.bus}</h3>
            <h3 className='text-gray-600'>restaurant: {singlePostData.restaurant}</h3>
          </div>
        </div>

        <div className='w-full h-56 mt-4'>
          <h2 className='text-lg font-medium mb-2'>Location</h2>
          <div className={`w-full h-full ${map?"w-full":"hidden"} `}>
            <Map items={[singlePostData]} />
          </div>
        </div>
        
        <div>
          <button className='text-lg font-medium h-16 mt-11 bg-yellow-200 w-44 text-center '>Send Message</button>
         
        </div>
      </div>
    </div>
  )
}

export default SinglePage
