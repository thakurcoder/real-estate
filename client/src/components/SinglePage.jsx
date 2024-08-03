import React, { useEffect, useState } from 'react'
import { singlePostData, userData } from '../lib/dummyData'
import Map from './Map'
import Slider from './Slider'
import { sliderStore } from '../lib/userStore'
import { useParams } from 'react-router-dom'
import apiRequest from '../lib/apiRequest'

function SinglePage() {

  const {id} = useParams()
  // const slider = sliderStore((state)=>state.slider)
  // const setslider = sliderStore((state)=>state.setSlider)
  const [slider,setSlider] = useState(true)
  const [postData,setPostData] = useState([])
  const [userData,setUserData] = useState()

  const fetchData = async ()=>{
    try {
      console.log("id is present ",id)
      const res = await apiRequest.post("/api/post/getpost",{id})
      console.log("hello",res)
      setPostData(res.data.post)
      console.log("data",res.data)
      setUserData(res.data)


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  if(postData.length==0){
    return
  }

  const handleSlider = (value)=>{
    setSlider(true)
    console.log(slider)
    console.log("it is working")
  }

  const handleState = ()=>{
    if(slider==true){
      console.log("in slider")
      setSlider(false)
    }
  }

  return (
    <div className='w-full h-full m-3 p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
      <div className='w-full lg:w-2/3 space-y-4'>
        {/* Image */}
        <div onClick={handleState}>
        <Slider slider={handleSlider}   images={postData.img} />
        </div>
        {/* Information */}
        <div className={`bg-white shadow-md rounded-lg p-4 ${slider?"w-full":"hidden"}`}>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-semibold'>{postData.title}</h1>
              <h2 className='text-xl text-gray-600'>{postData.address}</h2>
              <h2 className='text-xl text-gray-600'>Type: {postData.type}</h2>
              <h2 className='text-xl text-gray-600'>Property: {postData.property}</h2>
              <h3 className='text-xl text-green-600'>${postData.price}</h3>
            </div>
            <div className='text-center'>
              <img className='w-28 h-28 rounded-full object-cover mb-2' src={userData.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"} alt="User" />
              <h1 className='text-lg font-medium'>{userData.username}</h1>
            </div>
          </div>
          <p className='mt-4 text-gray-700'>{postData.desc}</p>
        </div>
      </div>

      <div className={`w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4 space-y-4 ${slider?"w-full":"hidden"}`}>
        <h1 className='text-xl font-semibold mb-2'>General</h1>

        <div>
          <h2 className='text-lg font-medium'>Room Size</h2>
          <div className='flex gap-4 mt-2'>
            <h3 className='text-gray-600'>sqft: {postData.size}</h3>
            <h3 className='text-gray-600'>bed: {postData.bedroom}</h3>
            <h3 className='text-gray-600'>bathroom: {postData.bathroom}</h3>
          </div>
        </div>

        <div>
          <h2 className='text-lg font-medium'>Nearby Places</h2>
          <div className='flex gap-4 mt-2'>
            <h3 className='text-gray-600'>school: {postData.school}</h3>
            <h3 className='text-gray-600'>bus: {postData.bus}</h3>
            <h3 className='text-gray-600'>restaurant: {postData.restaurant}</h3>
          </div>
        </div>

        <div className='w-full h-56 mt-4'>
          <h2 className='text-lg font-medium mb-2'>Location</h2>
          <div className={`w-full h-full ${slider?"w-full":"hidden"} `}>
            <Map items={[postData]} />
          </div>
        </div>
        
        <div>
          <button onClick={()=>window.alert("Send Message is currently not working we are working on it.")} className='text-lg font-medium h-16 mt-11 bg-yellow-200 w-44 text-center '>Send Message</button>
         
        </div>
      </div>
    </div>
  )
}

export default SinglePage
