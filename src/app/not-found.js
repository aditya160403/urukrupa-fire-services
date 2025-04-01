import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="mb-4 text-4xl font-bold text-red-600">
        Oops, Something Went Wrong!
      </h1>
      <p className="text-lg text-gray-800">
        We apologize for the inconvenience.
      </p>
      <p className="mt-2 text-lg text-gray-800">
        Gurukrupa Fire Services is working to resolve the issue.
      </p>
      <div className="mt-6 text-lg text-gray-800">
        <p>Contact Us:</p>
        <div className="mt-2">
          <p>
            Email:{" "}
            <a
              href="mailto:gurukrupafireservices@gmail.com"
              className="text-blue-600 hover:underline"
            >
              gurukrupafireservices@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919823823324"
              className="text-blue-600 hover:underline"
            >
              +919823823324
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
