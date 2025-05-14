import React from "react";

export default function PhotoFrame({ imageSrc, alt, className = "" }) {
  const containerClass =
    "relative w-fit p-4 pt-6 bg-white shadow-xl border border-gray-200 " + className;

  return (
    <div className={containerClass}>
      {/* Top tape */}
      <div className="absolute -top-3 -left-6 w-32 h-12 bg-white/40 rotate-[-20deg] shadow-lg  z-10"></div>
      <div className="absolute -top-2 -right-6 w-32 h-12 bg-white/40 rotate-[30deg] shadow-lg  z-10"></div>

      {/* Image */}
      <img
        src={imageSrc}
        alt={alt || "Framed photo"}
        className="w-auto h-auto  mb-10 object-cover border border-gray-300"
      />

      {/* Bottom tape */}
      {/* <div className="absolute -bottom-2 left-4 w-10 h-4 bg-white rotate-[20deg] shadow-sm border border-gray-200 z-10"></div>
      <div className="absolute -bottom-2 right-4 w-10 h-4 bg-white rotate-[-20deg] shadow-sm border border-gray-200 z-10"></div> */}
    </div>
  );
}