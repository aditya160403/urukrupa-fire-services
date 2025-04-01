"use client";
import React, { useState } from "react";
import Image from "next/image";
import hydrantvalve from "../../assets/Products/Hydrant Valve.jpg";
import { FaWhatsapp } from "react-icons/fa";
import HoseReel from "../../assets/Products/Hose-Reel.jpg";
import HoseBox from "../../assets/Products/Hose-Box.jpg";
import HosePipe from "../../assets/Products/Fire-Hoses.jpg";
import BranchPipe from "../../assets/Products/Branch-Pipe.jpg";
import VortexInhibitor from "../../assets/Products/Vortex-Inhibitor.jpg";
import AirVessel from "../../assets/Products/air-visel.jpg";
import PuddleFlanges from "../../assets/Products/Puddle-Flanges.jpg";
import WaterMonitor from "../../assets/Products/Water-Monitor.jpg";
import FoamMonitor from "../../assets/Products/Foam-Monitor.jpg";
import SprinklerSet from "../../assets/Products/Fire-Sprinkler-Set.jpg";
import CallPoint from "../../assets/Products/MCP.jpg";
import ControlPanel from "../../assets/Products/Untitled-20.jpg";
import Link from "next/link";

const ProductCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            className="transition-transform transform hover:scale-105"
          />
        </div>
        <div className="p-2">
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>

          <a
            href={`https://wa.me/9823823324?text=I'm interested in ${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-2 py-3 mt-4 text-center text-white transition duration-300 bg-gray-900 rounded-md focus:outline-none hover:bg-gray-800"
          >
            <div className="flex items-center justify-center space-x-2">
              <FaWhatsapp className="text-xl text-green-600" />
              <p className="text-sm font-semibold text-green-600">
                Enquire Now
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Hydrant Valve",
      description: "High-quality hydrant valve for fire safety.",
      imageUrl: hydrantvalve,
    },
    {
      title: "Hose Reel",
      description: "Durable hose reel for quick fire response.",
      imageUrl: HoseReel,
    },
    {
      title: "Hose Box",
      description: "Compact hose box for easy storage and access.",
      imageUrl: HoseBox,
    },
    {
      title: "Hose Pipe",
      description: "Flexible hose pipe for efficient water flow.",
      imageUrl: HosePipe,
    },
    {
      title: "Branch Pipe",
      description: "Branch pipe with high-pressure nozzle.",
      imageUrl: BranchPipe,
    },
    {
      title: "Vortex Inhibitor",
      description: "Effective vortex inhibitor for fire systems.",
      imageUrl: VortexInhibitor,
    },
    {
      title: "Air Vessel",
      description: "Air vessel for maintaining pressure in systems.",
      imageUrl: AirVessel,
    },
    {
      title: "Puddle Flanges",
      description: "Puddle flanges to prevent water leakage.",
      imageUrl: PuddleFlanges,
    },
    {
      title: "Water Monitor",
      description: "High-performance water monitor for fire control.",
      imageUrl: WaterMonitor,
    },
    {
      title: "Water Foam Monitor",
      description: "Foam monitor for efficient fire suppression.",
      imageUrl: FoamMonitor,
    },
    {
      title: "Fire Sprinkler Set",
      description: "Complete fire sprinkler set for buildings.",
      imageUrl: SprinklerSet,
    },
    {
      title: "Manual Call Point",
      description: "Emergency manual call point for alerts.",
      imageUrl: CallPoint,
    },
    {
      title: "Fire Fighting Control Panel",
      description: "Control panel for managing fire systems.",
      imageUrl: ControlPanel,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <h2 className="mb-6 text-2xl font-semibold text-center">
          Our Products
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-wrap -mx-2">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
