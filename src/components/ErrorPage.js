import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-semibold text-red-600">404 Error</h1>
        <p className="mb-6 text-xl text-gray-800">
          Sorry, the page you are looking for doesnt exist.
        </p>
        <p className="text-lg text-gray-600">
          Gurukrupa Fire Services is coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
