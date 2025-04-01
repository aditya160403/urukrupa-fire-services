import React, { useEffect, useState } from "react";
import bgimg from "../assets/Products/productbg_11zon.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Fire Extinguisher",
      description:
        "Fire Extinguishers are a mandate for all types of buildings be it commercial, residential, or industrial.",
    },
    {
      name: "Fire Fighting System",
      description:
        "Firefighting is an emergency allocation of resources, required to deal with an unforeseen problem.",
    },
    {
      name: "Fire Alarm System",
      description:
        "A fire alarm is an electronic sounder which makes a loud high sound to alert people that there is a fire in the building.",
    },
  ];

  return (
    <section
      className="relative py-12"
      style={{
        backgroundImage: `url('${bgimg.src}')`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container relative mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-white">
          Explore Our Products
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="p-6 bg-white rounded-lg shadow-md bg-opacity-80 hover:shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-red-500">
                {product.name}
              </h3>
              <p className="text-gray-800 text-opacity-90">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* "We Are Here To Help You" Message */}
        <div className="mt-12 ">
          {/* <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            We Are Here To Help You
          </h3>
          <p className="text-gray-800">
            Whether you need fire safety products, services, or guidance, our
            team is dedicated to assisting you. Feel free to contact us for any
            inquiries or assistance.
          </p> */}
          <a
            href={"/contact"}
            className="inline-block px-4 py-2 mt-4 text-xl font-semibold text-white bg-red-500 rounded-lg hover:bg-red-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
