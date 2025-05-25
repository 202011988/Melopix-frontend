import React from "react";
import Loading from "../components/Loading";
import ResultSlide from "../components/ResultSlide";
import ResultPlayer from "../components/ResultPlayer";
import Col from "../components/GridLayout/Col";
import bgImage from "../assets/gallery_bg.png";
import sampleImage from "../assets/SampleImages/Image1.jpg"

const ComponentTest = () => {
  const calculatedHeight = "calc(100vh - 124px)";

  // 테스트용 더미 데이터
  const loading = true; // true로 설정하면 로딩 화면 테스트 가능
  const item = {
    source_stream_audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };
  const description = "테스트 이미지로부터 생성된 설명입니다.";
  const file = sampleImage;

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
        {/* 중앙 정렬된 콘텐츠 */}
        <Col className="flex justify-center items-center h-full px-32">
          {loading && <Loading />}
          {item && (
            <ResultPlayer
              description={description}
              musicSrc={item.source_stream_audio_url}
              imageSrc={file}
            />
          )}
        </Col>
      </div>
    </div>
  );
};

export default ComponentTest;
