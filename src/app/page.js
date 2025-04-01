"use client";
import Home from "@/components/Home";
import ProductsSection from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatWeOffer from "@/components/WhatWeOffer";
import OurAchievements from "@/components/OurAchievements";
import TestimonialSection from "@/components/Testimonials";

import CarouselSection from "@/components/Carousel";
import OurClients from "@/components/OurClients";
import OurProducts from "@/components/OurProducts";
import GalleryHighlights from "@/components/GalleryHilightes";
export default function HomePage() {
  return (
    <>
      {/* <CarouselSection /> */}
      {/* Hero Section */}
      {/* <CarouselSection /> */}
      <Home />
      <OurProducts />
      {/* <ProductsSection /> */}
      <WhatWeOffer />
      <WhyChooseUs />
      <OurAchievements />
      <GalleryHighlights />
      <OurClients />
      {/* <TestimonialSection /> */}
    </>
  );
}
