import React from "react";
import fewater from "../../../assets/FE_Types/FE-water-min.png";
import Image from "next/image";

const WaterExtinguishersInfo = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <Image
              src={fewater.src}
              alt="Water Fire Extinguisher"
              width={500}
              height={600}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-extrabold text-blue-900">
              Water Fire Extinguishers
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Water Extinguishers are designed for extinguishing Class A fires
              which are fueled by combustible materials, such as wood, paper, or
              textiles. They work by cooling the burning fuel to the point where
              it no longer supports combustion.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Available Sizes:
            </p>
            <ul className="pl-6 text-gray-800 list-disc">
              <li>6 Litre</li>
              <li>9 Litre</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Please note that Water Extinguishers are not suitable for
              flammable liquid or gas fires, or those involving electrical risk.
              Both the body and the label are colored red. We can also offer you
              a high-performance version for space-saving applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterExtinguishersInfo;
