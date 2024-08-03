import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center p-5 lg:p-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At <span className="font-bold">Dream Home</span>, our mission is simple: to help you find the perfect place to call home. Whether you're buying, selling, or renting, we strive to deliver exceptional service and unparalleled expertise in the real estate market. Our dedicated team of professionals is committed to understanding your unique needs and providing personalized solutions to ensure a seamless and rewarding experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700">
            Founded in 2024, <span className="font-bold">Dream Home</span> has grown to become a trusted name in real estate. Our team combines years of industry experience with a passion for helping clients achieve their real estate goals. We pride ourselves on our in-depth knowledge of the local market, innovative approach to property transactions, and unwavering dedication to client satisfaction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Buying</h3>
              <p className="text-lg text-gray-700">
                Finding the right property can be overwhelming, but with our comprehensive listings and personalized guidance, we make the process simple and enjoyable. From first-time buyers to seasoned investors, we offer expert advice to help you make informed decisions and secure your ideal property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Selling</h3>
              <p className="text-lg text-gray-700">
                Our strategic marketing and negotiation skills ensure that your property stands out in the market and attracts the right buyers. We provide a full suite of services to maximize your property's value and achieve a successful sale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Renting</h3>
              <p className="text-lg text-gray-700">
                Whether you're looking for a new rental home or seeking reliable tenants for your property, our team is here to assist. We offer a range of rental options and manage every detail to make your rental experience smooth and stress-free.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li><span className="font-semibold">Local Expertise:</span> Our deep understanding of the local market ensures that you receive accurate and relevant information to make the best decisions.</li>
            <li><span className="font-semibold">Client-Centric Approach:</span> We prioritize your needs and work tirelessly to provide tailored solutions that align with your goals.</li>
            <li><span className="font-semibold">Innovative Solutions:</span> Leveraging the latest technology and market insights, we offer innovative solutions to enhance your real estate experience.</li>
            <li><span className="font-semibold">Trustworthy Service:</span> Our commitment to integrity and transparency builds lasting relationships with our clients.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            We’re here to answer your questions and help you get started on your real estate journey. Contact us today to learn more about how we can assist you.
          </p>
          <div className="space-y-2 text-lg text-gray-700">
            <p><span className="font-semibold">Phone:</span> +91 6206929818</p>
            <p><span className="font-semibold">Email:</span> <a href="mailto:[Your Email Address]" className="text-blue-500 hover:underline">singh123aman12345@gmail.com</a></p>
            <p><span className="font-semibold">Office Address:</span> </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
