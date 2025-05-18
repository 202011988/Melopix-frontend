import Col from "../components/GridLayout/Col";
import Grid from "../components/GridLayout/Grid";
import Row from "../components/GridLayout/Row";
import FilmTextFrame from "../components/TextFrame";

const Manual = () => {

    return (
        <Col className={'pt-32 flex-1 items-center'}>
            <Row>
                <FilmTextFrame 
                    color="orange"
                    headerText="step 1"
                    bodyText={`떠올리고 싶은 사진을\n선택해주세요`}
                    className="top-20"
                    frameRotation={-16.7}
                    tapeRotation={1.9}
                />
                <FilmTextFrame 
                    color="yellow"
                    headerText="step 2"
                    bodyText={`파일 업로드를 누르고,\n사진을 넣어주세요`}
                    className=""
                    frameRotation={-3.7}
                    tapeRotation={3.65}
                />
                <FilmTextFrame 
                    color="orange"
                    headerText="step 3"
                    bodyText={`추억이 다시 구성되는 동안\n잠시만 기다려주세요`}
                    className="top-20"
                    frameRotation={18.27}
                    tapeRotation={0.27}
                />
                <FilmTextFrame 
                    color="yellow"
                    headerText="step 4"
                    bodyText={`노랫소리를 들으며 추억을\n다시 감상해봅시다`}
                    className="top-16"
                    frameRotation={6.24}
                    tapeRotation={-4.74}
                />
            </Row>
        </Col>
    );
};

export default Manual;