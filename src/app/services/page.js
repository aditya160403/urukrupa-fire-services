import React from "react";
import {
  FaFire,
  FaWrench,
  FaShieldAlt,
  FaCertificate,
  FaBuilding,
} from "react-icons/fa";
import fireExtinguisherImage from "../../assets/Services/03.jpg";
import materialInstallationImage from "../../assets/Services/Amc.png";
import amcImage from "../../assets/Services/image2-5.png";
import certificateImage from "../../assets/Services/safety-extinguisher-instrument-utility-faucet (1).jpg";
import fireMocImage from "../../assets/Services/image1-8.png";
import Image from "next/image";
import bgimg from "../../assets/3d-rendering-gas-cylinder_11zon (1).jpg";

export const metadata = {
  title: "Services | Gurukrupa Fire Services",
  description:
    "Discover our comprehensive fire safety services, including fire extinguisher supply and refilling, new material installation, AMC for fire fighting equipment, Form A and Form B certificate supply, and municipal corporation fire safety compliance in Auric City, MIDC. Contact Gurukrupa Fire Services for all your fire safety needs at Plot No. D-84, Shendra MIDC, Aurangabad.",
};

const servicesData = [
  {
    icon: <FaFire className="text-3xl text-red-700" />,
    title: "Fire Extinguishers",
    description:
      "We offer new supply and refilling of fire extinguishers to ensure your safety.",
    imageUrl: fireExtinguisherImage,
  },
  {
    icon: <FaWrench className="text-3xl text-red-700" />,
    title: "New Material & Installation",
    description:
      "We provide new material and installation services for fire safety equipment.",
    imageUrl: materialInstallationImage,
  },
  {
    icon: <FaShieldAlt className="text-3xl text-red-700" />,
    title: "AMC of all Fire Fighting Equipment",
    description:
      "Our Annual Maintenance Contracts (AMC) cover all your fire fighting equipment needs.",
    imageUrl: amcImage,
  },
  {
    icon: <FaCertificate className="text-3xl text-red-700" />,
    title: "Form A , Form B Supply",
    description:
      "We supply Form A and Form B certificates for your fire safety compliance.",
    imageUrl: certificateImage,
  },
  {
    icon: <FaBuilding className="text-3xl text-red-700" />,
    title: "Fire MOC (Municipal Corporation, Auric City, MIDC)",
    description:
      "Our services extend to municipal corporation fire safety compliance in Auric City, MIDC.",
    imageUrl: fireMocImage,
  },
];

const Services = () => {
  return (
    <section
      className="py-8 bg-gray-100"
      style={{
        backgroundImage: `url('${bgimg.src}')`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-white">Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="object-cover rounded-md"
                  aria-label={service.title}
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
