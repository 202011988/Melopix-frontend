import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PhotoFrame({ imageSrc, alt, className }) {
  return (
    <div
      className={cn(
        "relative w-fit p-4 pt-6 bg-white shadow-xl border border-gray-200",
        className
      )}
    >
      {/* Top tape */}
      <div className="absolute -top-2 left-4 w-10 h-4 bg-white rotate-[-20deg] shadow-sm border border-gray-200 z-10"></div>
      <div className="absolute -top-2 right-4 w-10 h-4 bg-white rotate-[20deg] shadow-sm border border-gray-200 z-10"></div>

      {/* Image */}
      <img
        src={imageSrc} // 이미지 경로를 props로 받음
        alt={alt || "Framed photo"}
        className="w-full h-auto object-cover border border-gray-300"
      />

      {/* Bottom tape */}
      <div className="absolute -bottom-2 left-4 w-10 h-4 bg-white rotate-[20deg] shadow-sm border border-gray-200 z-10"></div>
      <div className="absolute -bottom-2 right-4 w-10 h-4 bg-white rotate-[-20deg] shadow-sm border border-gray-200 z-10"></div>
    </div>
  );
}
