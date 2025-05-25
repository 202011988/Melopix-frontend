import React from "react";
import HahmletBody from "../components/HahmletBody";
import Col from "./GridLayout/Col";
import Row from "./GridLayout/Row";

const Loading = () => {

  return (
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
  );
};

export default Loading;
