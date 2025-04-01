import React from "react";
import hydrantImage from "../../../assets/Fire-System/hydrant.jpg"; // Replace with the actual image path
import hydrantImage2 from "../../../assets/Fire-System/hydrant2.png"; // Replace with the actual image path
import Image from "next/image";

const UserCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const FireHydrantSystem = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 space-y-4">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Fire Hydrant System
          </h2>
          <UserCard
            icon="🚒"
            title="Components"
            description="Fire Hydrants, Water Supply, Hydrant Valve, Hydrant Standpipe."
          />
          <UserCard
            icon="🔥"
            title="Types of Fire Hydrants"
            description="Dry Barrel Hydrants, Wet Barrel Hydrants."
          />
          <UserCard
            icon="⭐️"
            title="Importance"
            description="Fire hydrant systems are crucial because they provide an immediate and reliable water supply for firefighting efforts. This is especially important in densely populated areas where water availability can greatly impact firefighting effectiveness."
          />
        </div>
        <div className="relative">
          <Image
            src={hydrantImage.src}
            alt="Fire Hydrant System"
            className="rounded-tl-lg rounded-bl-lg shadow-md"
            width={500}
            height={500}
            loading="lazy"
          />
          <div className="mt-6">
            <Image
              src={hydrantImage2.src}
              alt="Fire Hydrant System"
              className="rounded-tl-lg rounded-bl-lg shadow-md"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireHydrantSystem;
