import React from "react";
import Image from "next/image";
import prod1 from "./Products/prod1.png";
import prod2 from "./Products/prod2.png";
import prod3 from "./Products/prod3.png";
import Link from "next/link";
const OurProducts = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-16 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
          Explore Our Products
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
        {/* Product 1 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-full">
              <Image src={prod1} alt="Product 1" width={80} height={80} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Fire Extinguisher
            </h3>
            <p className="mt-2 text-base text-gray-700">
              Fire Extinguishers are a mandate for all types of buildings, be it
              commercial, residential, or industrial.
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-full">
              <Image src={prod2} alt="Product 2" width={80} height={80} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Fire Fighting System
            </h3>
            <p className="mt-2 text-base text-gray-700">
              Firefighting is an emergency allocation of resources, required to
              deal with an unforeseen problem.
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-full">
              <Image src={prod3} alt="Product 3" width={80} height={80} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Fire Alarm System
            </h3>
            <p className="mt-2 text-base text-gray-700">
              A fire alarm is an electronic sounder which makes a loud high
              sound to alert people that there is a fire in the building.
            </p>
          </div>
        </div>
      </div>
      {/* More Products Button */}
      <div className="mt-8">
        <Link href="/products">
          <button className="px-6 py-3 text-base font-medium text-white uppercase bg-orange-500 rounded-full md:text-lg hover:bg-orange-600 focus:outline-none">
            More Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;
