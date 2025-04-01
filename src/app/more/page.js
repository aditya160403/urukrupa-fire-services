// pages/more.js
import React from "react";
import Image from "next/image";

const safetyGuideImages = [
  {
    title: "Fire Safety Tips",
    imageUrl: "/path-to-your-image/fire-safety-tips.jpg", // Replace with the actual image path
  },
  {
    title: "Emergency Evacuation Plan",
    imageUrl: "/path-to-your-image/emergency-evacuation-plan.jpg", // Replace with the actual image path
  },
  {
    title: "Fire Extinguisher Usage",
    imageUrl: "/path-to-your-image/fire-extinguisher-usage.jpg", // Replace with the actual image path
  },
  {
    title: "Smoke Detector Placement",
    imageUrl: "/path-to-your-image/smoke-detector-placement.jpg", // Replace with the actual image path
  },
];

const More = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold">Fire Safety Guides</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {safetyGuideImages.map((guide, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="relative h-52 md:h-72">
                <Image
                  src={guide.imageUrl}
                  alt={guide.title}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 mb-2 text-xl font-semibold">{guide.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
