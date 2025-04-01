import Image from "next/image";
import Link from "next/link";
import React from "react";

import fesetHd from "../../assets/FE_Types/fesetHd-min.png";

export const metadata = {
  title: "Fire Extinguishers | Gurukrupa Fire Services",
  description:
    "Discover Gurukrupa Fire Services, your trusted partner in fire safety and protection. With over two decades of dedicated service, we are committed to safeguarding lives and preserving property.",
};

const FireExtinguisherTypes = () => {
  const extinguisherTypes = [
    {
      name: "Water Fire Extinguisher",
      description:
        "Water fire extinguishers are used to combat Class A fires, which involve materials like paper, wood, and textiles. They work by cooling the fire and reducing the heat.",
      imageUrl:
        "https://c8.alamy.com/comp/B7MR6J/red-water-fire-extinguisher-B7MR6J.jpg",
    },
    {
      name: "CO2 (Carbon Dioxide) Fire Extinguisher",
      description:
        "CO2 fire extinguishers are suitable for Class B and Class C fires, involving flammable liquids and electrical fires. They work by displacing oxygen and smothering the fire.",
      imageUrl: "",
    },
    {
      name: "Dry Powder Fire Extinguisher",
      description:
        "Dry powder fire extinguishers are versatile and can be used for Class A, B, and C fires. They work by interrupting the chemical reaction of the fire.",
      imageUrl: "/images/dry_powder_extinguisher.jpg",
    },
    {
      name: "Foam Fire Extinguisher",
      description:
        "Foam fire extinguishers are effective against Class A and Class B fires. They create a barrier over the fire, cutting off its oxygen supply.",
      imageUrl: "/images/foam_extinguisher.jpg",
    },
    {
      name: "Wet Chemical Fire Extinguisher",
      description:
        "Wet chemical fire extinguishers are designed for Class F fires, which involve cooking oils and fats. They work by cooling and emulsifying the burning substance.",
      imageUrl: "/images/wet_chemical_extinguisher.jpg",
    },
    {
      name: "ABC Fire Extinguisher",
      description:
        "ABC Fire Extinguishers are very effective against all classes of fire risks.The ABC fire extinguishers are portable in nature and are ideal for industrial, domestic, and commercial fire safety needs",
      imageUrl: "/images/wet_chemical_extinguisher.jpg",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">
          Types of Fire Extinguishers
        </h2>
        <div className="flex justify-center mb-8">
          <Image
            src={fesetHd}
            alt="Fire Extinguisher Set"
            width={600}
            height={600}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {extinguisherTypes.map((extinguisher, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {extinguisher.name}
              </h3>
              <p className="mb-4 text-gray-600">{extinguisher.description}</p>
              <Link
                href={`/extinguishers/${extinguisher.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <p className="block px-4 py-2 text-white transition duration-300 bg-gray-800 rounded-md hover:bg-red-800">
                  Read More..
                </p>
              </Link>
            </div>
          ))}
        </div>
        0000000000000
      </div>
    </section>
  );
};

export default FireExtinguisherTypes;
