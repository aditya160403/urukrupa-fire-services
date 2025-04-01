import React from "react";
import sprinklerImage from "../../../assets/Fire-System/Sprinklers.jpg"; // Replace with the actual image path
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

const FireSprinklerSystem = () => {
  return (
    <div className="p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
        Fire Sprinkler System
      </h2>
      <div className="my-8 text-center">
        <Image
          src={sprinklerImage.src}
          alt="Fire Sprinkler System"
          className="mx-auto rounded-lg"
          width={500}
          height={300}
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <UserCard
            icon="🔥"
            title="Components"
            description="Water supply pipes, control valves, sprinkler heads, and sometimes a fire alarm system."
          />
        </div>
        <div>
          <UserCard
            icon="🔊"
            title="Activation"
            description="Sprinkler heads activate individually in response to heat, releasing water onto the affected area."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
        <div>
          <UserCard
            icon="🚰"
            title="Types of Sprinklers"
            description="Wet pipe systems, dry pipe systems, pre-action systems, and deluge systems are used based on building use and conditions."
          />
        </div>
        <div>
          <UserCard
            icon="⭐️"
            title="Advantages"
            description="Fire sprinkler systems provide rapid fire control, minimize damage, and reduce the risk of injuries or fatalities."
          />
        </div>
      </div>
      <div className="mt-6">
        <UserCard
          icon="🔧"
          title="Maintenance"
          description="Regular maintenance and inspections are crucial to ensure the proper functioning of the system."
        />
      </div>
    </div>
  );
};

export default FireSprinklerSystem;
