import React from "react";
import Image from "next/image"; // Import the Image component
import foamExtinguisherImage from "../../../assets/FE_Types/FE_Foam-min.jpg";

const FoamExtinguisherInfo = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            {/* Replace the img element with the Image component */}
            <Image
              src={foamExtinguisherImage}
              alt="Foam Fire Extinguisher"
              width={600} // Set the width and height as needed
              height={400}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-extrabold text-blue-900">
              Mechanical Foam Fire Extinguishers
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Mechanical Foam fire extinguishers are highly effective against
              fires involving materials like oil, fats, solvents, gases, paint,
              varnish, electrical wiring, and live machinery.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              They should never be used on electrical fires, flammable gases,
              cooking fats, and oils. Foam-based fire extinguishers can be used
              on Class A and Class B fires.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Available Sizes:
              <ul className="pl-6 list-disc">
                <li>6 kg Extinguishers</li>
                <li>9 kg Extinguishers</li>
                <li>13.7 kg Extinguishers</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoamExtinguisherInfo;
