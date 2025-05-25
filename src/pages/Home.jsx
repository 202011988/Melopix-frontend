import { useNavigate } from "react-router-dom";
import FrameSlideshow from "../components/FrameSlideshow";
import Col from "../components/GridLayout/Col";
import Grid from "../components/GridLayout/Grid";
import Row from "../components/GridLayout/Row";
import HahmletHeading from "../components/HahmletHeading";
import SDGothicBody from "../components/SDGothicBody";
import StartButton from "../components/StartButton";

const Home = () => {

  const navigate = useNavigate();

  const imageSources = [
    require('../assets/SampleImages/Image1.jpg'),
    require('../assets/SampleImages/Image2.jpg'),
    require('../assets/SampleImages/Image3.jpg'),
    require('../assets/SampleImages/Image4.jpg'),
    require('../assets/SampleImages/Image5.jpg'),
    require('../assets/SampleImages/Image6.jpg'),
    require('../assets/SampleImages/Image7.jpg'),
    require('../assets/SampleImages/Image8.jpg'),
  ];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: `calc(100vh - ${136}px)`,
      }}
      >
      {/* 좌측 그라데이션 */}
      <div className="absolute left-0 top-0 h-full w-[45%] z-10 pointer-events-none bg-gradient-to-r from-[#F3EFEC] to-transparent" />

      {/* 우측 그라데이션 */}
      <div className="absolute right-0 top-0 h-full w-[10%] z-10 pointer-events-none bg-gradient-to-l from-[#F3EFEC] to-transparent" />

      {/* 상단 그라데이션 */}
      {/* <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent" /> */}
  

      <Grid className="px-32 pt-20 relative">
        <Col className="flex-1">
          <Row>
            <HahmletHeading className="z-20 mb-8">
              당신의 추억을 다시 듣고 싶으신가요?
            </HahmletHeading>
          </Row>
          <Row>
            <SDGothicBody className="z-20 mb-8">
              AI가 사진 속 소중한 순간을 음악으로 재해석합니다.<br />
              사진 한 장만 업로드하면, 그 기억을 담은 나만의 멜로디가 탄생합니다.<br />
              이제, 당신의 이야기를 노래로 들어보세요.<br />
            </SDGothicBody>
          </Row>
          <Row>
            <StartButton 
              className="z-20 relative mt-5"
              onClick={() => navigate('./upload')}
            />
          </Row>
        </Col>
      </Grid>

      <div className="absolute bottom-16 w-full z-0">
        <FrameSlideshow
          images={imageSources}
          className="h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px]" // ✅ 반응형 슬라이드 높이
        />
      </div>

    </div>
  );
};

export default Home;