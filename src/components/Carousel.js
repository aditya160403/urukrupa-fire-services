import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import img1 from "../assets/Carousel/img1 c.jpeg";
import img2 from "../assets/Carousel/img2 c.jpeg";
import img3 from "../assets/Carousel/img3 c.jpeg";
import img4 from "../assets/Carousel/img4 c.jpeg";
import img5 from "../assets/Carousel/img5 c.jpeg";
import img6 from "../assets/Carousel/img6 c.jpeg";

const clients = [
  [img3, img2],
  [img3, img4],
  [img5, img6],
];

const Carousal = () => {
  const [numImagesPerSlide, setNumImagesPerSlide] = useState(2);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth <= 640) {
          setNumImagesPerSlide(1);
        } else {
          setNumImagesPerSlide(2);
        }
      }, 200); // Adjust the debounce delay as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer); // Clear the timeout on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <Carousel
          showThumbs={!numImagesPerSlide}
          showStatus={false}
          infiniteLoop
          autoPlay
          showArrows={true}
          showIndicators={true}
          interval={3000}
        >
          {clients.map((clientGroup, index) => (
            <div
              className={`text-center bg-white rounded-lg shadow-md`}
              key={index}
            >
              <div className="flex">
                {clientGroup.slice(0, numImagesPerSlide).map((client, i) => (
                  <div
                    className={`w-${numImagesPerSlide === 1 ? "full" : "1/2"}`}
                    key={i}
                  >
                    <Image
                      src={client}
                      alt={`Slide ${index + 1}`}
                      width={1200}
                      height={500}
                      loading="lazy" // Optimize image loading
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousal;
