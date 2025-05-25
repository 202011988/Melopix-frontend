import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HahmletBody from "../components/HahmletBody";
import Col from "./GridLayout/Col";

const messages = [
  "추억 속으로 한 걸음 더 다가갑니다",
  "사진 속 추억들이 선율이 되어 흐르고 있어요",
  "잠시만요, 감정을 악보로 옮기는 중이에요",
  "빛과 색을 소리로 바꾸는 마법이 이루어지고 있어요",
  "장면 하나하나에 어울리는 음을 고르고 있어요",
];

const Loading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Col className="flex justify-center items-center h-full px-32">
      <motion.div
        className="bg-[#ffffff60] mb-8 px-6 py-3 rounded-2xl inline-block"
        layout
        transition={{ duration: 0.4, type: "spring" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            <HahmletBody className="text-center text-black">
              {messages[index]}
            </HahmletBody>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Col>
  );
};

export default Loading;
