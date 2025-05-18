import React, { useMemo } from "react";
import HahmletHeading from "./HahmletHeading";
import HahmletBody from "./HahmletBody";

// Image Assets
const frameBg = require("../assets/frame_bg.png");
const frameBgYellow = require("../assets/frame_bg_yellow.png");
const frameBgOrange = require("../assets/frame_bg_orange.png");

// Image Map
const BG_IMAGE_MAP = {
  yellow: frameBgYellow,
  orange: frameBgOrange,
};

export default function FilmTextFrame({
  headerText = "Header",
  bodyText = "Body",
  className = "",
  color = "yellow", // 'yellow' | 'orange'
  frameRotation = 0,
  tapeRotation = 0,
}) {
  //const tapeRotation = useMemo(() => (Math.random() * 10 - 5).toFixed(2), []);

  const noteBackgroundImage = `url(${BG_IMAGE_MAP[color] || BG_IMAGE_MAP.yellow})`;

  return (
    <div
      className={
        "relative w-[290px] h-[350px] p-4 pt-6 flex flex-col items-center text-center " +
        className
      }
      style={{
        backgroundImage: `url(${frameBg})`, // 프레임 배경
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "-4px 4px 3px 0 rgba(0, 0, 0, 0.2),  0px 0px 4px 1px rgba(0, 0, 0, 0.2)",
        transform: `rotate(${frameRotation}deg)`,
      }}
    >
      {/* 상단 테이프 */}
      <div
        className="absolute -top-7 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/50 shadow z-10"
        style={{ 
          transform: `translateX(-50%) rotate(${tapeRotation}deg)`,
          boxShadow: "-3px 3px 2px 0 rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* 메모 영역 */}
      <div
        className="w-full h-[250px] p-4 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: noteBackgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HahmletHeading className="w-full text-center mb-10">
          {headerText}
        </HahmletHeading>
        <HahmletBody className="w-full mb-10 text-center whitespace-pre-line leading-relaxed">
          {bodyText}
        </HahmletBody>
      </div>
    </div>
  );
}
