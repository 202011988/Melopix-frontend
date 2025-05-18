import FrameSlideshow from "../components/FrameSlideshow";
import Col from "../components/GridLayout/Col";
import Grid from "../components/GridLayout/Grid";
import Row from "../components/GridLayout/Row";
import HahmletHeading from "../components/HahmletHeading";
import SDGothicBody from "../components/SDGothicBody";

const Home = () => {




  const imageSources = [

    // 더 많은 이미지 URL 추가
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
    <div >
      <Grid className={'px-32 pt-20'}>
        <Col className={'flex-1'}>
          <Row>
              <HahmletHeading className={'mb-8'}>
                  당신의 추억을 다시 듣고 싶으신가요?
              </HahmletHeading>
          </Row>
          <Row>
              <SDGothicBody className={'mb-5'}>
                  잊어버린 당신의 사진첩 속 기억 한 조각을 가져오세요<br />
                  눈을 감고 시간을 되감아봅시다.<br />
              </SDGothicBody>
          </Row>
        </Col>
      </Grid>
      <FrameSlideshow images={imageSources}  className={'mt-32'}/>
    </div>

  );
};

export default Home;