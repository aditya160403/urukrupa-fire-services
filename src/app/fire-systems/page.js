import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head"; // Import the Head component for adding meta tags
import sprinkler from "../../assets/Fire-System/Sprinklers.jpg";
import firealarm from "../../assets/Fire-System/fire-alarm-switch (1).jpg";
import hydrant from "../../assets/Fire-System/hydrant.jpg";
import fireseparation from "../../assets/Fire-System/firesepration.jpg";
import suppression from "../../assets/Fire-System/suppression.jpg";
export const metadata = {
  title: "Fire Protection Systems | Gurukrupa Fire Services",
  description:
    "Explore our fire protection systems including sprinkler systems, fire alarm systems, fire hydrant systems, fire separation systems, and fire suppression systems. Enhance fire safety with our advanced solutions.",
};
const systemsData = [
  {
    title: "Sprinkler System",
    description:
      "Our state-of-the-art sprinkler systems provide automated fire protection by releasing water when a fire is detected. They are highly effective in controlling and extinguishing fires in various environments.",
    imageUrl: sprinkler,
    detailsUrl: "/fire-systems/sprinkler-system",
  },
  {
    title: "Fire Alarm System",
    description:
      "Our advanced fire alarm systems are designed to detect fires early, sound alarms, and alert occupants, helping to ensure swift evacuation and response to fire emergencies.",
    imageUrl: firealarm,
    detailsUrl: "/fire-systems/alarm-system",
  },
  {
    title: "Fire Hydrant System",
    description:
      "Our fire hydrant systems are essential for delivering a large volume of water to combat fires. They are strategically placed in and around buildings to provide a reliable water source for firefighters.",
    imageUrl: hydrant,
    detailsUrl: "/fire-systems/hydrant-system",
  },
  {
    title: "Fire Separation System",
    description:
      "Fire separation systems are crucial for containing fires and preventing them from spreading to other areas. We offer a range of fire-rated walls, doors, and barriers to enhance fire safety.",
    imageUrl: fireseparation,
    detailsUrl: "/fire-separation-details",
  },
  {
    title: "Fire Suppression System",
    description:
      "Our fire suppression systems use various agents like water mist, foam, or gases to suppress fires quickly and efficiently. They are tailored to specific fire risks and environments.",
    imageUrl: suppression,
    detailsUrl: "/fire-systems/fire-suppression-system",
  },
];

const Systems = () => {
  return (
    <>
      {/* Add meta tags for SEO */}
      <Head>
        <title>Fire Protection Systems | Gurukrupa Fire Services</title>
        <meta
          name="description"
          content="Explore our fire protection systems including sprinkler systems, fire alarm systems, fire hydrant systems, fire separation systems, and fire suppression systems. Enhance fire safety with our advanced solutions."
        />
      </Head>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-semibold">
            Our Fire Protection Systems
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {systemsData.map((system, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="relative h-52 md:h-72">
                  <Image
                    src={system.imageUrl}
                    alt={system.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-4 mb-2 text-xl font-semibold">
                  {system.title}
                </h3>
                <p className="text-sm text-gray-700">{system.description}</p>
                <Link href={system.detailsUrl}>
                  <p className="block px-4 py-2 mt-4 text-white transition duration-300 bg-gray-700 rounded-md hover:bg-red-800 hover:text-red-200">
                    View Details
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Systems;
