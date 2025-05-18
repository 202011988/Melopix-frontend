import FrameSlideshow from "../components/FrameSlideshow";
import Col from "../components/GridLayout/Col";
import Grid from "../components/GridLayout/Grid";
import Row from "../components/GridLayout/Row";
import HahmletHeading from "../components/HahmletHeading";
import SDGothicBody from "../components/SDGothicBody";

const Home = () => {
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
    <div className="relative overflow-hidden">
      {/* 왼쪽 그라데이션 (넓고 자연스럽게) */}
      <div className="absolute left-0 top-0 h-full w-[65%] z-10 pointer-events-none bg-gradient-to-r from-black/40 to-transparent" />


      {/* 오른쪽 그라데이션 */}
      <div className="absolute right-0 top-0 h-full w-[25%] z-10 pointer-events-none bg-gradient-to-l from-black/40 to-transparent" />

      {/* 위쪽 블러 그라데이션 */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent" />
  
      {/* 아래쪽 블러 그라데이션
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent" /> */}

      <Grid className="px-32 pt-20 relative z-0">
        <Col className="flex-1">
          <Row>
            <HahmletHeading className="mb-8">
              당신의 추억을 다시 듣고 싶으신가요?
            </HahmletHeading>
          </Row>
          <Row>
            <SDGothicBody className="mb-5">
              잊어버린 당신의 사진첩 속 기억 한 조각을 가져오세요<br />
              눈을 감고 시간을 되감아봅시다.<br />
            </SDGothicBody>
          </Row>
        </Col>
      </Grid>

      <div className="mt-32 relative z-0">
        <FrameSlideshow images={imageSources} />
      </div>
    </div>
  );
};

export default Home;