import React from "react";
import co2img from "../../../assets/FE_Types/FE-co2-min.png";
import Image from "next/image";

const CO2ExtinguishersInfo = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <Image
              src={co2img.src}
              alt="CO2 Fire Extinguisher"
              height={500}
              width={500}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-extrabold text-red-900">
              CO2 Fire Extinguishers
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              CO2 (Carbon Dioxide) fire extinguishers are your first line of
              defense against Class B fires involving flammable liquids and
              electrical fires. They work by displacing oxygen, smothering the
              fire, and depriving it of the oxygen it needs to burn.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Available Sizes:
              <ul className="pl-6 list-disc">
                <li>2 Kg Extinguishers</li>
                <li>5 Kg Extinguishers</li>
                <li>6.8 kg Extinguishers</li>
                <li>8 kg Extinguishers</li>
              </ul>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Please note that CO2 extinguishers are not suitable for deep fat
              fires or gas fires. Its essential to choose the right type of
              extinguisher for each specific fire hazard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CO2ExtinguishersInfo;
