import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
import ResultSlide from "../components/ResultSlide";
import ResultPlayer from "../components/ResultPlayer";
import Col from "../components/GridLayout/Col";
import bgImage from "../assets/gallery_bg.png";
import sampleImage from "../assets/SampleImages/Image1.jpg";

const ComponentTest = () => {
  const calculatedHeight = "calc(100vh - 124px)";
  const [loading, setLoading] = useState(true);

  // 테스트용 더미 데이터
  const item = {
    source_stream_audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };
  const description = "테스트 이미지로부터 생성된 설명입니다.";
  const file = sampleImage;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden" style={{ height: calculatedHeight }}>
      {/* 움직이는 프레임 배경 */}
      <div
        className="absolute top-0 left-0 w-full z-0 flex justify-center"
        style={{ height: calculatedHeight }}
      >
        <div className="w-[calc(100%-32rem)] pt-10">
          <ResultSlide />
        </div>
      </div>

      {/* 배경 이미지 + 콘텐츠 */}
      <div
        className="relative mx-32 mt-10 rounded-3xl overflow-hidden shadow-xl z-10"
        style={{
          height: calculatedHeight,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Col className="flex justify-center items-center h-full px-32">
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Loading />
              </motion.div>
            )}

            {!loading && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              >
                <ResultPlayer
                  description={description}
                  musicSrc={item.source_stream_audio_url}
                  imageSrc={file}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Col>
      </div>
    </div>
  );
};

export default ComponentTest;
