import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "../assets/hero-bg.png"; // Import your hero background image
import founderImage from "../assets/vivekPassSize.png"; // Import the image of the founder

const Home = () => {
  return (
    <div className="relative lg:h-[550px] h-auto  text-white bg-gray-800 lg:px-32 md:px-16">
      {/* Hero background image with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
      <Image
        src={heroBg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="container relative flex flex-col items-center justify-center px-4 py-20 mx-auto md:flex-row z-5">
        {/* Left Column: Welcome message and other content */}
        <div className="md:w-1/2 md:mr-4 ">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            Welcome to <span className="text-orange-500">Gurukrupa</span> Fire
            Services
          </h1>
          <p className="max-w-lg mb-8 text-xl font-medium leading-relaxed text-white md:text-xl">
            Protecting lives and property from fire hazards is a shared
            responsibility. Whether you are a homeowner, business owner, or
            project manager, we have the expertise and resources to keep you
            safe.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link href="/about">
              <p className="px-6 py-3 text-base font-medium text-center text-white capitalize transition duration-300 ease-in-out bg-orange-500 rounded-full md:text-lg hover:bg-orange-600">
                Explore More
              </p>
            </Link>
            <Link href="/contact">
              <p className="px-6 py-3 text-base font-medium text-center text-white capitalize transition duration-300 ease-in-out bg-white bg-opacity-0 border border-white rounded-full cursor-pointer md:text-lg hover:bg-opacity-10 hover:border-opacity-50">
                Contact Us
              </p>
            </Link>
          </div>
        </div>

        {/* Right Column: Founder image and name */}
        <div className="mt-8 md:w-1/2 md:ml-4 md:mt-0">
          <div className="flex flex-col items-center justify-center">
            {/* Add the name of the founder here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
