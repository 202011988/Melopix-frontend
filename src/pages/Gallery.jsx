import bgImage from "../assets/gallery_bg.png";
import GalleryCard from "../components/GalleryCard";
import Row from "../components/GridLayout/Row";
import Col from "../components/GridLayout/Col";

const Gallery = () => {
  return (
    <div
        className=" my-8 w-[85%] rounded-2xl mx-auto"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <Row className="justify-between p-20">
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image1.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/N2M2OTMxNDMtZDY1Zi00OTNlLTkxMGMtOGExOTNkZTYyZDVh.mp3'}
                    name={'골목길에서'}
                    date={'2017.07.05'}
                    description={`친구들과 헤어지고 집에 가는 길에 혼자서 터덜터덜 걸어간다`}
                />
            </Col>
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image2.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/NWJmYTVjODEtODI2Mi00MTI3LThlODAtNzNjYzFiZmQxOThj.mp3'}
                    name={'밴드 공연을 보며'}
                    date={'2017.08.17'}
                    description={`동기의 첫 밴드 공연을 관람하면서 환호성을 지른다. 모두가 열광하며 소리지른다`}
                />
            </Col>
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image3.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/MDMzNjUzNDMtN2M5NS00OTZjLWE4ZDYtY2I4YmI2MWY5YWM1.mp3'}
                    name={'고양이들'}
                    date={'2018.01.02'}
                    description={`아기 고양이와 큰 고양이가 서로 재밌게 놀고, 그루밍을 해주며, 즐거운 한 때를 보냈다`}
                />
            </Col>
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image4.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/Yzc4Y2ZiMWMtYTgyOS00M2FiLThhODUtNTM1OWY1NmE4OWRh.mp3'}
                    name={'산책 길'}
                    date={'2019.09.09'}
                    description={`서울숲 공원 아침, 시원한 바람과 따스한 햇살을 느끼며 여유로운 아침 산책을 보낸다. 기분 좋은 한 때였다.`}
                />
            </Col>
        </Row>
        <Row className="justify-between pb-20 px-20">
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image5.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/YTBkOGMxNTEtN2Y0OC00NGI1LTg2ZGQtMWI1ZmRhZjY2YmUy.mp3'}
                    name={'귀여운 냥이'}
                    date={'2020.04.14'}
                    description={`점심을 먹고 느긋하게 애교부리는 고양이를 쓰다듬었더니 몸을 뒤집고 더욱 쓰다듬어 달라 요구한다`}
                />
            </Col>
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image6.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/NGU5MjI1MGEtYzU4MC00N2FkLWJkMmEtODIxNTZmYWY0MWUx.mp3'}
                    name={'한옥마을 길에서'}
                    date={'2021.05.24'}
                    description={`친구들과 한복을 빌려입고, 한옥마을의 웃음기 가득한 사람들을 지나 풍경을 느껴본다`}
                />
            </Col>
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image7.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/NmE0M2UzNWQtODM1OC00MmY1LWE1ODYtNGQ1MzhmZTZjZTEy.mp3'}
                    name={'성당'}
                    date={'2021.05.25'}
                    description={`웅장한 성당 그리고 이국적인 외관에서 느껴지는 알 수 없는 신비로움을 느끼며 관광을 즐겼다`}
                />
            </Col>
            <Col className="scale-85 items-center">
                <GalleryCard
                    imageUrl={require('../assets/SampleImages/Image8.jpg')} 
                    musicUrl={'https://apiboxfiles.erweima.ai/MDE3ZWFlOGEtZmVhMi00Zjg4LWE5YWItNmJkZGFkZmRlN2I4.mp3'}
                    name={'위스키 한 잔'}
                    date={'2023.03.04'}
                    description={`살짝 술에 취한 채 둘이서 들어간 동네 위스키 가게, 화려한 병들이 우릴 반기고 어떤 술을 선택할지 고민을 하며 대화를 이어갔다`}
                />
            </Col>
        </Row>
    </div>
  );
};

export default Gallery;
