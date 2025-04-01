import React from "react";
import Image from "next/image";
import suppressionImage from "../../../assets/Fire-System/suppression.jpg"; // Replace with the actual path to your image

const FireSuppressionSystems = () => {
  const suppressionSystems = [
    {
      title: "Gas Systems",
      description:
        "Gas suppression systems store fire-suppressing liquids, which are pressurized with nitrogen. These liquids contain a chemical agent called FM200 / NOVEC 1230 / Aerosols, which is quickly released to immediately suppress fire. Since these systems don’t use any water, they’re particularly beneficial for rooms with large amounts of electrical equipment such as switchboards or server rooms. The gaseous agent is initially condensed in liquid form and stored in compact cylinders, making these systems easy to transport and store.",
      applications: [
        "Server Rooms",
        "Archives",
        "Switch rooms",
        "Battery Storage Room",
        "Data Centres",
        "Communication rooms",
        "Large Generator rooms",
      ],
    },
    {
      title: "Foam systems for kitchens",
      description:
        "Wet chemical foam systems are specifically designed for suppressing fires in kitchens. These kitchen fire suppression systems work by quickly emitting a water-based chemical foam agent directly into a small localised area. They are usually placed under the canopies and are activated by either a manual switch or a heating tubes.",
      applications: ["Commercial Kitchens"],
    },
    {
      title: "Water mist systems",
      description:
        "Water mist systems pose a viable fire suppression solution for spaces that cannot be exposed to large amounts of water. They work by producing droplets that are much smaller than conventional sprinkler systems. This creates a layer of steam that starves fires of oxygen, quickly reducing the temperature of the affected area. Since they use much less water than traditional sprinklers, they can, to some extent, be considered a more sustainable fire suppression method.",
      applications: ["Historical Buildings", "Art Galleries", "Libraries"],
    },
    {
      title: "Foam deluge systems",
      description:
        "Foam deluge systems are designed for the quick widespread application of suppressive materials. Foam deluge systems use a mixture of foam and water to quickly control burning flammable liquids, cooling the surface area. The consistency of the foam causes a thick blanket to starve fires of oxygen and inhibit the release of flammable gases, effectively smothering the fire. Hence, they are not unlike conventional fire extinguishers.",
      applications: ["Chemical Plants", "Fuel Depots", "Aircraft Hangars"],
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center">
          Fire Suppression Systems
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative w-full h-96 md:h-auto">
            <Image
              src={suppressionImage}
              alt="Fire Suppression Systems"
              loading="lazy"
            />
          </div>
          {suppressionSystems.map((system, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{system.title}</h3>
              <p className="text-gray-600">{system.description}</p>
              <h4 className="mt-4 mb-2 text-lg font-semibold">Applications:</h4>
              <ul className="text-gray-600 list-disc list-inside">
                {system.applications.map((app, appIndex) => (
                  <li key={appIndex}>{app}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FireSuppressionSystems;
