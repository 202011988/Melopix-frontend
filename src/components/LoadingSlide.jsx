import React, { useEffect, useState, useRef } from "react";
import Frame from "./Frame";

import Image1 from '../assets/SampleImages/Image1.jpg';
import Image2 from '../assets/SampleImages/Image2.jpg';
import Image3 from '../assets/SampleImages/Image3.jpg';
import Image4 from '../assets/SampleImages/Image4.jpg';
import Image5 from '../assets/SampleImages/Image5.jpg';
import Image6 from '../assets/SampleImages/Image6.jpg';
import Image7 from '../assets/SampleImages/Image7.jpg';
import Image8 from '../assets/SampleImages/Image8.jpg';

const allImages = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
];

const positions = [
  "left-4",
  "right-4",
  "left-1/2 -translate-x-1/2",
  "left-[20%]",
  "left-[60%]",
];

const patternHeight = 700;
const itemCountPerSet = positions.length;
const numSets = 6;

const speed = 0.5;
const totalScrollHeight = patternHeight * numSets;

function getRandomImage() {
  return allImages[Math.floor(Math.random() * allImages.length)];
}

function LoadingSlide() {
  const [items, setItems] = useState(() => {
    const arr = [];
    for (let setIdx = 0; setIdx < numSets; setIdx++) {
      for (let posIdx = 0; posIdx < itemCountPerSet; posIdx++) {
        arr.push({
          y: setIdx * patternHeight + posIdx * 140,
          imageUrl: getRandomImage(),
          posIndex: posIdx,
        });
      }
    }
    return arr;
  });

  const animationFrameId = useRef();

  useEffect(() => {
    const animate = () => {
      setItems((oldItems) => {
        return oldItems.map(({ y, imageUrl, posIndex }) => {
          let newY = y - speed;

          // 화면 위로 완전히 올라가면 다시 아래로 이동
          if (newY < -500) {
            // +totalScrollHeight 로 위치를 연속되게 이어줌
            newY = newY + totalScrollHeight;
            return { y: newY, imageUrl: getRandomImage(), posIndex };
          }

          return { y: newY, imageUrl, posIndex };
        });
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      {items.map(({ y, imageUrl, posIndex }, idx) => (
        <div
        key={idx}
        className={`absolute ${positions[posIndex]} scale-90`}
        style={{ top: y, width: 300, height: 400 }}
        >
          <Frame imageUrl={imageUrl} blur={20} />
        </div>
      ))}
    </div>
  );
}

export default LoadingSlide;
