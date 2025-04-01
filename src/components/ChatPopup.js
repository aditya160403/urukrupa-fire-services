import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatPopup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed overflow-hidden bg-white rounded-lg shadow-lg bottom-10 right-10 w-72">
      <div className="flex justify-between p-2 text-white bg-green-600">
        <h3 className="font-semibold">Gurukrupa Fire Services</h3>
        <button className="text-white hover:text-yellow-300" onClick={onClose}>
          X
        </button>
      </div>
      <div className="px-4 py-3">
        <div className="mb-2 chat-message received">
          <p className="text-gray-600">Gurukrupa Fire Services</p>
          <p>Hi there 👋</p>
          <p>How can we assist you today?</p>
        </div>
        {/* Add more chat messages here */}
      </div>
      <div className="flex items-center px-4 py-2 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-2 py-1 mr-2 border border-gray-300 rounded-full focus:outline-none"
        />
        <button className="px-4 py-1 text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
