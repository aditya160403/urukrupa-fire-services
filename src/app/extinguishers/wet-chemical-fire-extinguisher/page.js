import React from "react";
import Image from "next/image";
import wetChemicalExtinguisherImage from "../../../assets/FE_Types/FE_wetchem-removebg-preview-min.png";

const WetChemicalExtinguisherInfo = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <Image
              src={wetChemicalExtinguisherImage}
              alt="Wet Chemical Fire Extinguisher"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-extrabold text-green-900">
              Wet Chemical Fire Extinguishers
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Wet Chemical fire extinguishers are designed for Class F fires,
              which involve cooking oils and fats. They work by cooling and
              emulsifying the burning substance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              They are highly effective on kitchen fires but should not be used
              on other types of fires. Always choose the right extinguisher for
              the specific fire hazard.
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

export default WetChemicalExtinguisherInfo;
