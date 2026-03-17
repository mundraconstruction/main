// src/components/SpeedDial.jsx
import { useState } from "react";

export default function SpeedDial() {
  const [open, setOpen] = useState(false);

  const contact = {
    name: "Mundra Construction",
    number: "07445651177",
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end z-50">
      {/* Contact Info */}
      <div
        className={`mb-4 px-5 py-3 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl text-white flex flex-col items-start gap-1 transform transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <span className="font-bold text-yellow-400">{contact.name}</span>
        <a
          href={`tel:${contact.number}`}
          className="hover:underline font-medium"
        >
          {contact.number}
        </a>
      </div>

      {/* Glowing Mobile Button with In-Out Glow */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl text-black bg-yellow-500
          transition-all transform hover:scale-110
          animate-glow
          ${open ? "rotate-45" : "rotate-0"}
        `}
        style={{ transition: "all 0.4s ease" }}
      >
        {open ? "✕" : "📱"}
      </button>

      {/* Glow Animation */}
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 10px rgba(255,255,0,0.7), 0 0 20px rgba(255,255,0,0.5), 0 0 30px rgba(255,255,0,0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(255,255,0,0.9), 0 0 50px rgba(255,255,0,0.6), 0 0 75px rgba(255,255,0,0.4);
          }
          100% {
            box-shadow: 0 0 10px rgba(255,255,0,0.7), 0 0 20px rgba(255,255,0,0.5), 0 0 30px rgba(255,255,0,0.3);
          }
        }
        .animate-glow {
          animation: glowPulse 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
