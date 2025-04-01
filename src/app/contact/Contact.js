"use client";
import React, { useState } from "react";
export const metadata = {
  title: "Contact Us | Gurukrupa Fire Services",
  description:
    "Get in touch with Gurukrupa Fire Services for any questions, inquiries, or fire safety needs. Contact us via phone, email, or visit our office at Plot No. D-84, Shendra MIDC, Aurangabad.",
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(process.env.FORM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setSubmissionStatus({
          success: true,
          message: "Email sent successfully.",
        });
      } else {
        setSubmissionStatus({
          success: false,
          message: "Email sent successfully.",
        });
      }
    } catch (error) {
      console.error("Email sent successfully:", error);
      setSubmissionStatus({
        success: false,
        message: "Email sent successfully",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="container py-8 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            If you have any questions or inquiries, please feel free to get in
            touch with us. You can reach us via phone, email, or by visiting our
            office.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Contact Details
            </h2>
            <p className="text-gray-700">
              <strong>Phone:</strong>{" "}
              <a href="tel:9823823324" className="text-blue-600">
                9823823324
              </a>
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:gurukrupafireservices@gmail.com"
                className="text-blue-600"
              >
                gurukrupafireservices@gmail.com
              </a>
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Address:</strong> Plot No. D-84, Shendra MIDC, Chhatrapati
              Sambhajinagar
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Send Us a Message
            </h2>
            {submissionStatus && (
              <div
                className={`${
                  submissionStatus.success ? "text-green-600" : "text-red-600"
                } mb-4`}
              >
                {submissionStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block font-medium">
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                disabled={submitting}
                aria-label={submitting ? "Sending..." : "Send Message"}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
