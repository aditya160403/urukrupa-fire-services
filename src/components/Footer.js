"use client";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo-nobag.png";
const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showWhatsappButton, setShowWhatsappButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
    if (window.scrollY > 200) {
      setShowWhatsappButton(true);
    } else {
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
    <footer className="text-white bg-gray-800">
      <div className="container px-8 py-8 mx-auto">
        {/* WhatsApp Icon */}
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
        <div className="flex flex-wrap justify-between">
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
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiMail className="text-xl" />
                <a
                  href="mailto:gurukrupafireservices@gmail.com"
                  className="block hover:underline w-max"
                >
                  gurukrupafireservices@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-xl" />
                <a
                  href="tel:+919823823324"
                  className="block hover:underline w-max"
                >
                  +919823823324
                </a>
                <br></br>
                <a
                  href="tel:+91880513333"
                  className="block hover:underline w-max"
                >
                  +91880513333
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-xl" />
                <p>Plot No. D-84, Shendra MIDC, Chhatrapati Sambhajinagar</p>
              </div>
            </div>
          </div>

          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">Quick Links</h2>
            <div className="flex flex-col">
              <a href="/" className="block hover:underline w-max">
                Home
              </a>
              <a href="/about" className="block hover:underline w-max">
                About Us
              </a>
              <a href="/services" className="block hover:underline w-max">
                Services
              </a>
              <a href="/extinguishers" className="block hover:underline w-max">
                Fire Extinguishers
              </a>
              <a href="/fire-systems" className="block hover:underline w-max">
                Fire Systems
              </a>
              <a href="/products" className="block hover:underline w-max">
                Products
              </a>
              <a href="/gallery" className="block hover:underline w-max">
                Gallery
              </a>
              <a href="/contact" className="block hover:underline w-max">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-orange-500">Gurukrupa Fire Services</span>. All
          Rights Reserved.
        </div>
        {showScrollButton && (
          <button
            className="fixed right-0 p-3 text-white bg-red-600 rounded-full bottom-5 hover:bg-red-700 focus:outline-none"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            Back to Top
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
