import Col from "../components/GridLayout/Col";
import Grid from "../components/GridLayout/Grid";
import Row from "../components/GridLayout/Row";

const Home = () => {


    return (
        <div className="p-6">
        <Grid>
          {/* 왼쪽 */}
          <Col>
            <Row>
              <h1
                className="text-4xl"
                style={{ fontFamily: "'Hahmlet', serif", fontWeight: 400 }}
              >
                제목입니다
              </h1>
            </Row>
            <Row>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: 'Apple SD Gothic Neo', fontWeight: 400 }}
              >
                이 문장은 본문입니다.
              </p>
            </Row>
          </Col>
  
          {/* 오른쪽 (이미지) */}
          <Col className="row-span-2 justify-center items-center">
            <img
              src="/sample.jpg"
              alt="샘플"
              className="max-w-full h-auto rounded-lg shadow"
            />
          </Col>
        </Grid>
      </div>
    );
};

export default Home;