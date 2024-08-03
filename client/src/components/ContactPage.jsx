import React, { useState } from 'react';

const ContactPage = () => {
    const [jock,setJock] = useState(false)
    const handleClick = ()=>{
        setJock(true)
    }
    

  return (
     <div className="flex flex-col items-center p-5 lg:p-10 bg-gray-50">
     {!jock && <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4 text-center">
            We’d love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out to us.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Information</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><span className="font-semibold">Phone:</span> +91 6206929818</p>
            <p><span className="font-semibold">Email:</span> <a href="mailto:[Your Email Address]" className="text-blue-500 hover:underline">singh123aman12345@gmail.com</a></p>
            <p><span className="font-semibold">Office Address:</span> </p>
          </div>
        </section>
      </div>}
      {jock && <h1 className='text-5xl font-serif text-sky-400 text-center p-5 m-5'>Oops! It seems our contact form is taking a nap. We’re on it, but in the meantime, please reach us directly at singh123aman12345@gmail.com . We can’t wait to hear from you!</h1>}
    </div>
  );
};

export default ContactPage;
