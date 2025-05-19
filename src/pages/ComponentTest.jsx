import GalleryCard from "../components/GalleryCard";

const ComponentTest = () => {

    return (
        <GalleryCard
            imageUrl={require('../assets/SampleImages/Image1.jpg')} 
            musicUrl={'https://apiboxfiles.erweima.ai/N2M2OTMxNDMtZDY1Zi00OTNlLTkxMGMtOGExOTNkZTYyZDVh.mp3'}
            name={'골목길에서'}
            date={'2017.07.05'}
            description={`친구들과 헤어지고 집에 가는 길\n혼자서 터덜터덜 걸어간다.`}
        />
    );
};

export default ComponentTest;