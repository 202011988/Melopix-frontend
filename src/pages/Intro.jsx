import Col from "../components/GridLayout/Col";
import Grid from "../components/GridLayout/Grid";
import Row from "../components/GridLayout/Row";
import HahmletHeading from "../components/HahmletHeading";
import FilmFrame from "../components/PhotoFrame";
import SDGothicBody from "../components/SDGothicBody";

const Intro = () => {

    return (
        <Grid className={'px-32 pt-20'}>
            <Col className={'flex-1'}>
            <Row>
                <HahmletHeading className={'mb-8'}>
                    저희는 잃어버린 기억을 들려주는<br />
                    특별한 사진관입니다.
                </HahmletHeading>
            </Row>
            <Row>
                <SDGothicBody className={'mb-5'}>
                    당신의 소중한 사진 속 이야기를 AI가 음악으로 만들어 드립니다.<br />
                    사진이 담고 있는 감정과 순간을 노래로 표현하며 새로운 추억을<br />
                    선율로 선사합니다.<br />
                    지금, 당신만의 특별한 멜로디를 만나보세요.
                </SDGothicBody>
            </Row>
            <Row>
                <SDGothicBody>
                    기억은 시간이 지나면 조금씩 닳아가는 법입니다.<br />
                    하지만 괜찮습니다. 잊힌 자리에 다시 마음을 채워 넣으면 되니까요
                </SDGothicBody>
            </Row>
            </Col>
            <Col className="flex items-end">
                <FilmFrame 
                    imageSrc={require("../assets/intro_image.jpg")} 
                    alt="intro_image"
                />
            </Col>
        </Grid>
    );
};

export default Intro;