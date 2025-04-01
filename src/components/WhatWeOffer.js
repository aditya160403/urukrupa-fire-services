import React from "react";
import { FaShieldAlt, FaFire, FaHeart } from "react-icons/fa";
import Image from "next/image";
import img1 from "../assets/WeOffer/Engineering Services & Consultancy-min.jpg";
import img2 from "../assets/WeOffer/system integrator 2-min.jpg";
import img4 from "../assets/WeOffer/Fire Audit & AMC-min.jpg";

const services = [
  {
    icon: <FaShieldAlt className="mx-auto mb-4 text-6xl text-red-600" />,
    title: "Engineering Services & Consultancy",
    image: img1,
  },
  {
    icon: <FaFire className="mx-auto mb-4 text-6xl text-red-600" />,
    title: "System Integrator",
    image: img2,
  },
  {
    icon: <FaHeart className="mx-auto mb-4 text-6xl text-red-600" />,
    title: "Fire Audit & AMC",
    image: img4,
  },
];

const WhatWeOffer = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", updateIsMobile);
    updateIsMobile();

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">
          What We Offer
        </h2>
        <div
          className={
            isMobile ? "grid grid-cols-1 gap-8" : "grid grid-cols-3 gap-8"
          }
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="text-gray-600">{service.icon}</div>
              <h3 className="mt-6 mb-4 text-xl font-semibold">
                {service.title}
              </h3>
              <div className="flex justify-center">
                <div className="w-36">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    layout="responsive"
                    width={50}
                    height={50}
                    className="rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
