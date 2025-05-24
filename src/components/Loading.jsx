import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/gallery_bg.png";
import HahmletBody from "../components/HahmletBody";
import Col from "./GridLayout/Col";
import Row from "./GridLayout/Row";
import LoadingSlide from "./LoadingSlide";

const Loading = () => {
  const navigate = useNavigate();

  const calculatedHeight = "calc(100vh - 136px)";

  return (
    <div className="relative w-screen overflow-hidden" style={{ height: calculatedHeight }}>
      {/* 움직이는 프레임 배경 (bgImage 뒤, 전체 화면 영역) */}
      <div
        className="absolute top-0 left-0 w-full z-0 flex justify-center"
        style={{ height: calculatedHeight }}
      >
        <div className="w-[calc(100%-32rem)] pt-10">
          <LoadingSlide />
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
        <Col
          className="flex justify-center items-center h-full px-32"
          // style={{ height: calculatedHeight }}
        >
          <Row className="bg-[#ffffff60] mb-8 px-4 py-2 rounded-lg">
            <HahmletBody className="text-center text-black">
              추억 속으로 한 걸음 더 다가갑니다
            </HahmletBody>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Loading;
