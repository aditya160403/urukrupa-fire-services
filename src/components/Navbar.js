"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-nobag.png";
import TopContactSection from "./TopContactSection";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleTabClick = (tabName) => {
    closeMobileMenu(); // Close the mobile menu after clicking a tab
  };

  return (
    <>
      <TopContactSection />
      {/* Desktop View */}
      <nav className="sticky top-0 z-10 hidden min-w-full px-4 py-4 bg-white shadow-lg md:block md:px-14">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center justify-start">
                <Image src={logo} alt="logo" width={60} height={60} />{" "}
                <div className="ml-4 uppercase">
                  <h1 className="text-lg font-bold text-orange-500 uppercase">
                    Gurukrupa
                  </h1>
                  <h2 className="text-base font-bold text-gray-800 uppercase">
                    Fire Services
                  </h2>
                </div>
              </div>
            </Link>
            <div className="items-center hidden gap-12 md:flex">
              <div className="flex items-center gap-5">
                <Link href="/">
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "Home" || pathname === "/"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                    onClick={() => handleTabClick("Home")}
                  >
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/about"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                    onClick={() => handleTabClick("About")}
                  >
                    About Us
                  </p>
                </Link>
                <Link
                  href="/services"
                  className={`text-sm font-semibold cursor-pointer ${
                    pathname === "/services"
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                  onClick={() => handleTabClick("Services")}
                >
                  Services
                </Link>
                <Link
                  href="/extinguishers"
                  className={`text-sm font-semibold cursor-pointer ${
                    pathname === "/extinguishers"
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                  onClick={() => handleTabClick("Extinguishers")}
                >
                  Fire Extinguishers
                </Link>
                <Link
                  href="/fire-systems"
                  className={`text-sm font-semibold cursor-pointer ${
                    pathname === "/fire-systems"
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                  onClick={() => handleTabClick("Fire Systems")}
                >
                  Fire Systems
                </Link>
                <Link
                  href="/products"
                  className={`text-sm font-semibold cursor-pointer ${
                    pathname === "/products"
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                  onClick={() => handleTabClick("Products")}
                >
                  Products
                </Link>
                <Link
                  href="/gallery"
                  className={`text-sm font-semibold cursor-pointer ${
                    pathname === "/gallery"
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                  onClick={() => handleTabClick("Gallery")}
                >
                  Gallery
                </Link>
              </div>
              <Link
                href="/contact"
                className="py-3 font-medium text-center text-white capitalize bg-orange-500 rounded-full px-7 hover:bg-orange-600 focus:outline-none"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile View */}
      <div className="min-w-full px-4 py-4 bg-white shadow-lg md:hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center justify-start">
                <Image src={logo} alt="logo" width={60} height={60} />
                <div className="ml-4">
                  <h1 className="text-lg font-bold text-orange-500">
                    Gurukrupa
                  </h1>
                  <h2 className="text-base font-bold text-gray-800">
                    Fire Services
                  </h2>
                </div>
              </div>
            </Link>
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="mt-4">
              <div className="flex flex-col items-center justify-center gap-4">
                <Link href="/" onClick={() => handleTabClick("Home")}>
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/" ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    Home
                  </p>
                </Link>
                <Link href="/about" onClick={() => handleTabClick("About")}>
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/about"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    About Us
                  </p>
                </Link>
                <Link
                  href="/services"
                  onClick={() => handleTabClick("Services")}
                >
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/services"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    Services
                  </p>
                </Link>
                <Link
                  href="/extinguishers"
                  onClick={() => handleTabClick("Extinguishers")}
                >
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/extinguishers"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    Fire Extinguishers
                  </p>
                </Link>
                <Link
                  href="/fire-systems"
                  onClick={() => handleTabClick("Fire Systems")}
                >
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/fire-systems"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    Fire Systems
                  </p>
                </Link>
                <Link
                  href="/products"
                  onClick={() => handleTabClick("Products")}
                >
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/products"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    Products
                  </p>
                </Link>
                <Link href="/gallery" onClick={() => handleTabClick("Gallery")}>
                  <p
                    className={`text-sm font-semibold cursor-pointer ${
                      pathname === "/gallery"
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    Gallery
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
