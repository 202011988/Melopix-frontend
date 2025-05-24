import React, { useEffect, useState, useRef } from "react";
import Frame from "./Frame";

import Image1 from "../assets/SampleImages/Image1.jpg";
import Image2 from "../assets/SampleImages/Image2.jpg";
import Image3 from "../assets/SampleImages/Image3.jpg";
import Image4 from "../assets/SampleImages/Image4.jpg";
import Image5 from "../assets/SampleImages/Image5.jpg";
import Image6 from "../assets/SampleImages/Image6.jpg";
import Image7 from "../assets/SampleImages/Image7.jpg";
import Image8 from "../assets/SampleImages/Image8.jpg";

const allImages = [
  Image1, Image2, Image3, Image4,
  Image5, Image6, Image7, Image8,
];

// 5가지 위치 지정 (왼쪽, 오른쪽, 중앙, 좌20%, 좌60%)
const positions = [
  "left-4",
  "right-4",
  "left-1/2 -translate-x-1/2",
  "left-[20%]",
  "left-[60%]",
];

const itemHeight = 400; // Frame 높이
const itemSpacing = 220; // 아이템 간격 (400보다 작으면 겹침 발생)
const itemsPerSet = positions.length;
const numSets = 7; // 총 세트 개수 (위치 * 세트 = 총 아이템 개수)
const totalScrollHeight = numSets * itemsPerSet * itemSpacing;
const speed = 0.8;

function LoadingSlide() {
  const imageCounter = useRef(0);

  // 순서대로 이미지를 반환
  const getNextImage = () => {
    const image = allImages[imageCounter.current % allImages.length];
    imageCounter.current++;
    return image;
  };

  // 초기 아이템 세팅
  const [items, setItems] = useState(() => {
    const arr = [];
    for (let setIdx = 0; setIdx < numSets; setIdx++) {
      for (let posIdx = 0; posIdx < itemsPerSet; posIdx++) {
        arr.push({
          y: setIdx * itemsPerSet * itemSpacing + posIdx * itemSpacing,
          imageUrl: getNextImage(),
          posIndex: posIdx,
        });
      }
    }
    return arr;
  });

  const animationFrameId = useRef();

  useEffect(() => {
    const animate = () => {
      setItems((oldItems) =>
        oldItems.map(({ y, imageUrl, posIndex }) => {
          let newY = y - speed;

          // 위로 완전히 올라가면 아래로 부드럽게 이동
          if (newY < -itemHeight) {
            newY += totalScrollHeight;
            return { y: newY, imageUrl: getNextImage(), posIndex };
          }

          return { y: newY, imageUrl, posIndex };
        })
      );

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
          style={{ top: y, width: 300, height: itemHeight }}
        >
          <Frame imageUrl={imageUrl} blur={20} />
        </div>
      ))}
    </div>
  );
}

export default LoadingSlide;
