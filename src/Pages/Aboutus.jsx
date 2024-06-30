import React from 'react';

const Aboutus = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to deliver the best service to our customers with integrity and excellence. We strive to innovate and improve continuously.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <p className="text-gray-700">
            We offer a wide range of products and services to cater to various needs. Our offerings include but are not limited to quality products, exceptional customer service, and innovative solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-700">
            Our values are rooted in trust, commitment, and customer satisfaction. We believe in doing business with transparency and accountability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
          <p className="text-gray-700">
            Choosing us means choosing a partner who values your needs and works relentlessly to meet them. We offer unparalleled service, competitive pricing, and a commitment to quality that sets us apart from the competition.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;

