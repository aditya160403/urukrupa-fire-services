import React from "react";
import Image from "next/image";
import abcExtinguisherImage from "../../../assets/FE_Types/abc-fire-extinguisher-9-kg--424-min.jpg";

const ABCExtinguisherInfo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <Image
              src={abcExtinguisherImage}
              alt="ABC Fire Extinguisher"
              width={500}
              height={400}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-extrabold text-blue-900">
              ABC Fire Extinguishers
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              ABC Fire Extinguishers are highly effective against all classes of
              fire risks, including:
            </p>
            <ul className="mt-2 ml-6 list-disc">
              <li className="text-gray-800">
                Class A: Ordinary combustibles like wood, paper, and cloth
              </li>
              <li className="text-gray-800">
                Class B: Flammable liquids and gases
              </li>
              <li className="text-gray-800">Class C: Electrical fires</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              These extinguishers are portable and suitable for industrial,
              domestic, and commercial fire safety needs. They are available in
              various sizes, including:
            </p>
            <ul className="mt-2 ml-6 list-disc">
              <li className="text-gray-800">1 kg</li>
              <li className="text-gray-800">2 kg</li>
              <li className="text-gray-800">4 kg</li>
              <li className="text-gray-800">6 kg</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABCExtinguisherInfo;
