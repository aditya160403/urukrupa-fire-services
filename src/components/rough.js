"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import logo from "../assets/logo-nobag.png";
import Image from "next/image";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showWhatsappButton, setShowWhatsappButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
      setShowWhatsappButton(true);
    } else {
      setShowScrollButton(false);
      setShowWhatsappButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="px-16 py-12 text-white bg-gray-800">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        {/* Logo Info Column */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:mr-12">
          <Image
            src={logo}
            alt="Gurukrupa Fire Services Logo"
            width={48}
            height={56}
            className="w-12 h-14"
          />
          <div className="mt-2 text-center">
            <span className="text-lg font-bold leading-normal text-orange-500 uppercase">
              Gurukrupa
            </span>
            <br />
            <span className="text-base font-bold leading-tight text-white uppercase">
              Fire Services
            </span>
          </div>
          <div className="flex gap-4 py-4">
            <FaFacebook className="text-2xl text-white cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-2xl text-white cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-2xl text-white cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col items-center justify-center mb-8 text-center md:mb-0 md:mx-12">
          <div className="mb-4 text-xl font-medium text-white capitalize">
            Quick Links
          </div>
          <div className="flex flex-col gap-4">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/extinguishers" className="hover:underline">
              Fire Extinguishers
            </a>
            <a href="/fire-systems" className="hover:underline">
              Fire Systems
            </a>
            <a href="/products" className="hover:underline">
              Products
            </a>
            <a href="/gallery" className="hover:underline">
              Gallery
            </a>
            {/* Add other quick links here */}
          </div>
        </div>

        {/* Contact Us Column */}
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 text-xl font-medium text-white capitalize">
            Contact Us
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FiMail />
              <span className="text-base font-normal text-white lowercase">
                gurukrupafireservices@gmail.com
              </span>
            </div>{" "}
            <div className="flex items-center gap-2">
              <FiPhone />
              <div className="flex flex-col">
                <span className="text-base font-normal text-white lowercase">
                  +919823823324
                </span>
                <span className="text-base font-normal text-white lowercase">
                  +91880513333
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin />
              <span className="text-base font-normal text-white">
                Plot No. D-84, Shendra MIDC, Chhatrapati Sambhajinagar
              </span>
            </div>
            {/* Add other contact details here */}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          className="fixed right-0 p-3 text-white bg-red-600 rounded-full bottom-5 hover:bg-red-700 focus:outline-none"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          Back to Top
        </button>
      )}

      {/* WhatsApp button */}
      {showWhatsappButton && (
        <div className="fixed left-0 flex items-center justify-center p-2 bg-white rounded-full shadow-lg bottom-10">
          <a
            href="https://wa.me/9823823324"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-600"
          >
            <FaWhatsapp className="text-4xl" />
            <p className="font-semibold text-gray-900">Chat with us</p>
          </a>
        </div>
      )}

      {/* Divider */}
      <div className="py-4">
        <div className="w-full border border-gray-700"></div>
      </div>
      {/* Copyright */}
      <div className="text-white text-base font-normal font-['Mona Sans'] relative bottom-0 mt-8 text-center">
        © 2024 Gurukrupa Fire Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
