import React from "react";
import Image from "next/image";
import g1 from "../../assets/Gallary/g1.jpg";
import g2 from "../../assets/Gallary/g2.jpg";
import g3 from "../../assets/Gallary/g3.jpg";
import g4 from "../../assets/Gallary/g4.jpg";
import g5 from "../../assets/Gallary/g5.jpg";
import g6 from "../../assets/Gallary/g6.jpg";
import g7 from "../../assets/Gallary/g7.jpg";
import g8 from "../../assets/Gallary/g8.jpg";
import g9 from "../../assets/Gallary/g9.jpg";
import g10 from "../../assets/Gallary/g10.jpg";
import g11 from "../../assets/Gallary/g11.jpg";
import g12 from "../../assets/Gallary/g12.jpg";
export const metadata = {
  title: "Image Gallery | Gurukrupa Fire Services",
  description:
    "Explore our image gallery showcasing our fire safety services, equipment, and more. Contact Gurukrupa Fire Services for your fire safety needs at Plot No. D-84, Shendra MIDC, Aurangabad.",
};
const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-white rounded-lg shadow-md group"
          style={{ paddingBottom: "75%" }}
        >
          <div className="cursor-pointer">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg font-semibold text-white cursor-pointer">
              Click to enlarge
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const GalleryPage = () => {
  const images = [
    {
      src: g1,
      alt: "Image 1",
    },
    {
      src: g2,
      alt: "Image 2",
    },
    {
      src: g3,
      alt: "Image 3",
    },
    {
      src: g4,
      alt: "Image 4",
    },
    {
      src: g5,
      alt: "Image 5",
    },
    {
      src: g6,
      alt: "Image 6",
    },
    {
      src: g7,
      alt: "Image 7",
    },
    {
      src: g8,
      alt: "Image 8",
    },
    {
      src: g9,
      alt: "Image 9",
    },
    {
      src: g10,
      alt: "Image 10",
    },
    {
      src: g11,
      alt: "Image 11",
    },
    {
      src: g12,
      alt: "Image 12",
    },
  ];

  return (
    <div className="container py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Image Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryPage;
