import React from "react";
import Image from "next/image";
import drypowder from "../../../assets/FE_Types/838-min.jpg";
const DryPowderExtinguishersInfo = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <Image
              src={drypowder}
              alt="Dry Powder Fire Extinguisher"
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-extrabold text-red-900">
              Dry Powder Fire Extinguishers
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Our dry powder fire extinguishers are designed to handle a wide
              range of fire classes, including Class A (ordinary combustibles),
              Class B (flammable liquids and gases), and Class C (electrical
              fires), making them an ideal choice for any business.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Easy to use with straightforward operation for a quick response.
              High-quality construction ensures reliable performance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Please note that dry powder extinguishers are not suitable for
              deep fat fires or gas fires. Its essential to choose the right
              type of extinguisher for each specific fire hazard.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Red body and blue label for easy identification during
              emergencies.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Available in the following sizes:
              <ul className="pl-6 list-disc">
                <li>1 Kg</li>
                <li>2 Kg</li>
                <li>3 Kg</li>
                <li>4 Kg</li>
                <li>6 Kg</li>
                <li>9 Kg</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryPowderExtinguishersInfo;
