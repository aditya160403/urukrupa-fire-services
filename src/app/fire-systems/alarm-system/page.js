import React from "react";
import alarmImage from "../../../assets/Fire-System/fire-alarm-switch (1).jpg"; // Replace with the actual image path
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

const FireAlarmSystem = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r">
      <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
        Fire Alarm System
      </h2>
      <div className="my-8 text-center">
        <Image
          src={alarmImage.src}
          alt="Fire Alarm System"
          className="mx-auto rounded-lg shadow-md"
          width={600}
          height={300}
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <UserCard
            icon="🔥"
            title="Components"
            description="Smoke Detectors, Heat Detectors, Manual Pull Stations, Alarm Control Panel, Notification Devices."
          />
        </div>
        <div>
          <UserCard
            icon="🏢"
            title="Types of Fire Alarm Systems"
            description="Conventional Systems, Addressable Systems, Analog Systems."
          />
        </div>
      </div>
      <div className="mt-6">
        <UserCard
          icon="🔊"
          title="Activation"
          description="When a smoke or heat detector senses fire or smoke, it sends a signal to the alarm control panel, which activates the notification devices to alert occupants."
        />
      </div>
      <div className="mt-6">
        <UserCard
          icon="🔧"
          title="Maintenance"
          description="Regular maintenance, testing, and inspection are crucial to ensure the reliability of fire alarm systems. This includes checking detectors, pull stations, alarms, and the control panel."
        />
      </div>
    </div>
  );
};

export default FireAlarmSystem;
