import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Facility Manager, ABC Manufacturing",
    text: "Gurukrupa Fire Services has been our trusted partner for fire safety solutions for the past five years. Their team is professional, and their fire extinguisher maintenance service is top-notch. Thanks to them, we feel secure and well-prepared for any fire-related emergencies.",
  },
  {
    id: 2,
    name: "Neha Patel",
    position: "Safety Officer, XYZ Tech",
    text: "I highly recommend Gurukrupa Fire Services for their outstanding fire safety products and services. They provided us with a comprehensive fire alarm system that has already proven its effectiveness. Their team is knowledgeable, responsive, and a pleasure to work with.",
  },
  {
    id: 3,
    name: "Anjali Deshmukh",
    position: "Facilities Coordinator, City Library",
    text: "Our historical library needed a reliable fire suppression system to protect valuable archives and collections. Gurukrupa Fire Services delivered with a water mist system that met our unique needs. Their attention to detail and commitment to safety are truly commendable.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-900">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-red-500 border border-gray-300 rounded-lg shadow-md hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500"
            >
              <p className="text-lg text-white">{testimonial.text}</p>
              <div className="mt-4">
                <p className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
