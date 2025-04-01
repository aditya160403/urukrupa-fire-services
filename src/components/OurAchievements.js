import React from "react";
import Image from "next/image";
import achvimg from "../assets/achv-img.png";

const OurAchievements = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-black to-black">
      {/* Background Image */}
      <Image
        src={achvimg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 opacity-30"
      />
      {/* Content */}
      <div className="max-w-screen-xl px-4 py-12 mx-auto">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold">Our Achievements</h2>
        </div>
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-4">
          <AchievementCard count="10+" label="Years In Business" />
          <AchievementCard count="50+" label="Product Range" />
          <AchievementCard count="100+" label="Projects Completed" />
          <AchievementCard count="100+" label="Happy Clients" />
        </div>
      </div>
    </div>
  );
};

const AchievementCard = ({ count, label }) => {
  return (
    <div className="p-6 text-center rounded-lg shadow-md">
      <div className="mb-2 text-4xl font-semibold text-white">{count}</div>
      <div className="text-lg font-medium text-white">{label}</div>
    </div>
  );
};

export default OurAchievements;
