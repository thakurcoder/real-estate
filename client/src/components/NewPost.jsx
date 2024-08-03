import React, { useState,useEffect } from 'react';
import apiRequest from '../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import { isauthorised } from '../lib/isAuthorised';

const PostForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    img: '',
    desc: '',
    size: '',
    school: '',
    bus: '',
    restaurant: '',
    address: '',
    city: '',
    bathroom: '',
    bedroom: '',
    latitude: '',
    longitude: '',
    type: 'buy',
    property: 'apartment',

  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let parsedValue = value;
    if (['price', 'size', 'school', 'bus', 'restaurant', 'bathroom', 'bedroom', 'latitude', 'longitude'].includes(name)) {
      parsedValue = parseInt(value, 10) || '';
    } else if (name === 'img') {
      parsedValue = value.split(',').map((img) => img.trim());
    }

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
    const res = await apiRequest.post("/api/post/addpost",formData)
    navigate("/profile")
  };

  const isauthorise = async () => {
    const value = await isauthorised()
    if (!value) {
      navigate("/login")
    }
  }


  useEffect(()=>{
    isauthorise()
},[])

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-4">
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 font-medium">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="price" className="mb-2 font-medium">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="img" className="mb-2 font-medium">Image URLs (comma separated)</label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="desc" className="mb-2 font-medium">Description</label>
        <textarea
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="border p-2 rounded"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="size" className="mb-2 font-medium">Size (sqft)</label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="school" className="mb-2 font-medium">School Distance (m)</label>
          <input
            type="number"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bus" className="mb-2 font-medium">Bus Stop Distance (m)</label>
          <input
            type="number"
            id="bus"
            name="bus"
            value={formData.bus}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="restaurant" className="mb-2 font-medium">Restaurant Distance (m)</label>
          <input
            type="number"
            id="restaurant"
            name="restaurant"
            value={formData.restaurant}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bathroom" className="mb-2 font-medium">Bathrooms</label>
          <input
            type="number"
            id="bathroom"
            name="bathroom"
            value={formData.bathroom}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bedroom" className="mb-2 font-medium">Bedrooms</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            value={formData.bedroom}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="address" className="mb-2 font-medium">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="mb-2 font-medium">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="latitude" className="mb-2 font-medium">Latitude</label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="longitude" className="mb-2 font-medium">Longitude</label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="type" className="mb-2 font-medium">Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="property" className="mb-2 font-medium">Property Type</label>
        <select
          id="property"
          name="property"
          value={formData.property}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>
        </select>
      </div>
      
      <button type="submit" className="bg-blue-500 w-full text-white p-2 rounded mt-4">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
