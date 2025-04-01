import React from "react";
import Image from "next/image";
import logo1 from "../assets/ClientLogo/icon_splogo_blue.svg";
import logo2 from "../assets/ClientLogo/logo.png";
import logo3 from "../assets/ClientLogo/madhura.png";
import logo4 from "../assets/ClientLogo/RD-PRINT-PACK_FINAL-1.png";
import logo5 from "../assets/ClientLogo/gubba.gif";
import parson from "../assets/ClientLogo/parason-stock-preparation-line-logo (1).svg";
import Harman from "../assets/ClientLogo/Harman.png";
import Tooltech from "../assets/ClientLogo/Tooltech.png";
import Adora from "../assets/ClientLogo/Adora.png";
import Fintek from "../assets/ClientLogo/Fintek.png";
import Chandra from "../assets/ClientLogo/Chandra.png";
import Cast from "../assets/ClientLogo/Cast.png";
import Sunshine from "../assets/ClientLogo/Sunshine.png";
import Posliva from "../assets/ClientLogo/Posliva.png";
import NHK from "../assets/ClientLogo/NHK.png";
import Deshmukh from "../assets/ClientLogo/Deshmukh.png";

const clients = [
  { name: "R & D printback", logo: logo4 },
  { name: "Guba Cold storage", logo: logo5 },
  { name: "Madhura Backpack", logo: logo3 },
  { name: "Revon ELIMINATION", logo: logo2 },
  { name: "Parson", logo: parson },
  { name: "Harman Finochem Ltd", logo: Harman },
  { name: "Tool Tech Tooling", logo: Tooltech },
  { name: "Adora Pharma", logo: Adora },
  { name: "Fintech Engineering", logo: Fintek },
  { name: "Jay Jay Electrical", logo: logo1 }, // Replace with the actual logo if available
  { name: "Chandra Electrical", logo: Chandra },
  { name: "Cast 4 Aluminium Pvt. Ltd", logo: Cast },
  { name: "Sunshine Industries Pvt. Ltd", logo: Sunshine },
  { name: "Posliwa Solar", logo: Posliva },
  { name: "Pride paint", logo: logo1 }, // Replace with the actual logo if available
  { name: "NHK Automotive Components India Pvt. Ltd", logo: NHK },
  { name: "Deshmukh Public School", logo: Deshmukh },
];

const OurClients = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Esteemed Clients
        </h2>
        <p className="mt-4 text-base text-gray-600">
          Gurukrupa Fire Services is your trusted partner in fire safety.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={150}
              height={150}
              className="object-contain"
            />
            <p className="mt-2 text-center text-sm text-gray-700">
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
