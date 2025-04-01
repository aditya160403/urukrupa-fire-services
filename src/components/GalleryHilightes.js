import React from "react";
import Image from "next/image";
import img1 from "../assets/Gallary/g1.jpg";
import img2 from "../assets/Gallary/g2.jpg";
import img3 from "../assets/Gallary/g3.jpg";
import img4 from "../assets/Gallary/g4.jpg";
import img5 from "../assets/Gallary/g7.jpg";
import img6 from "../assets/Gallary/g6.jpg";
import Link from "next/link";

const GalleryHighlights = () => {
  return (
    <section className="min-w-full min-h-screen px-16 py-16 ">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Gallery Highlights
          </h2>
          <p className="py-4 text-base text-gray-600">
            Gurukrupa Fire Services is your trusted partner in fire safety.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { id: 1, src: img1, alt: "Image 1" },
            { id: 2, src: img2, alt: "Image 2" },
            { id: 3, src: img3, alt: "Image 3" },
            { id: 4, src: img4, alt: "Image 4" },
            { id: 5, src: img5, alt: "Image 5" },
            { id: 6, src: img6, alt: "Image 6" },
          ].map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-md aspect-w-4 aspect-h-3"
              style={{ width: "100%", height: "0", paddingBottom: "75%" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/gallery">
          <div className="inline-block px-6 py-3 text-base font-medium text-white capitalize bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600 5">
            View More
          </div>
        </Link>
      </div>
    </section>
  );
};

export default GalleryHighlights;
