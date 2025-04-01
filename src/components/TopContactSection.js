import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopContactSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative min-w-full bg-gray-800 lg:block hidden h-14 ${
        isSticky ? "sticky top-0 z-10" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-full mx-auto">
        <div className="flex items-center text-sm font-normal leading-tight text-white">
          <FaPhone className="mr-2" />
          (+91) 9823823324 | 8805513333
        </div>
        <div className="flex items-center text-sm font-normal leading-tight text-white">
          <FaMapMarkerAlt className="mr-2" />
          Plot No. D-84, Shendra MIDC, Chhatrapati Sambhajinagar
        </div>
        <div className="flex items-center text-sm font-normal leading-tight text-white">
          <FaEnvelope className="mr-2" />
          Gurukrupafireservices@gmail.com
        </div>
      </div>
    </div>
  );
};

export default TopContactSection;
