import Image from "next/image";
import aboutImage from "../../assets/logo-nobag.png";

export const metadata = {
  title: "About us | Gurukrupa Fire Services",
  description:
    "Learn about different types of fire extinguishers and their uses. Ensure fire safety with the right extinguisher for the job.",
};

const AboutUs = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center mb-0 text-center md:mb-0">
            <div className="relative overflow-hidden rounded-full w-60 h-60 md:w-96 md:h-96">
              <Image src={aboutImage} alt="About Us" className="rounded-full" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold text-red-900">
              Elevate Your Safety with Gurukrupa Fire Services
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Welcome to Gurukrupa Fire Services, your trusted partner in fire
              safety and protection. With over two decades of dedicated service,
              we are committed to safeguarding lives and preserving property.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              Our team of experts is driven by an unwavering commitment to
              excellence. We offer a comprehensive range of fire safety
              solutions, including top-tier fire extinguisher services,
              precision installations of fire safety equipment, and tailored
              annual maintenance contracts.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              At Gurukrupa Fire Services, we take pride in our unblemished track
              record. Our dedication to delivering superior products and
              services has solidified our position as a leader in the industry.
              Your safety is our top priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
