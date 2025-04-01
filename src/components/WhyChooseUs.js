import React from "react";
import Image from "next/image";
import icon1 from "./WhyChooseUs/chose1.png";
import icon2 from "./WhyChooseUs/chose2.png";
import icon3 from "./WhyChooseUs/chose3.png";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container px-4 mx-auto">
        <div className="mb-8 text-center text-gray-800">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="mt-2 text-base">
            Gurukrupa Fire Services is your trusted partner in fire safety.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <WhyChooseCard
            title="Reliable Systems"
            description="Comprehensive fire safety solutions from design to maintenance, ensuring protection of lives and property."
            icon={icon1}
          />
          <WhyChooseCard
            title="High-Quality Products"
            description="Prioritizing safety and quality with adherence to the highest industry standards."
            icon={icon2}
          />
          <WhyChooseCard
            title="Customer Satisfaction"
            description="Dedicated to serving customers as their trusted fire safety partner, providing comprehensive solutions."
            icon={icon3}
          />
        </div>
      </div>
    </section>
  );
};

const WhyChooseCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 text-center bg-white">
      <div className="flex items-center justify-center mb-4">
        <Image src={icon} alt={title} width={30} height={30} />
      </div>
      <h3 className="mb-2 text-xl font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default WhyChooseUs;
