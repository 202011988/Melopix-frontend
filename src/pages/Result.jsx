import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import bgImage from "../assets/gallery_bg.png";
import Col from "../components/GridLayout/Col";
import ResultSlide from "../components/ResultSlide";
import ResultPlayer from '../components/ResultPlayer';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state?.file;

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [description, setDescription] = useState('');
  const taskIdRef = useRef(null);

  const calculatedHeight = "calc(100vh - 124px)";

  useEffect(() => {
    if (!file) {
      alert('파일이 없습니다.');
      navigate('/');
      return;
    }

    console.log('업로드할 파일:', file);

    const upload = async () => {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const photoRes = await axios.post('/api/phototag', formData);
        console.log('phototag 응답:', photoRes.data);

        const photoDescription = photoRes.data.description;
        setDescription(photoDescription);

        const sunoRes = await axios.post('/api/suno', null, {
          params: { description: photoDescription }
        });
        console.log('suno 응답:', sunoRes.data);

        const taskId = sunoRes.data.data.taskId;
        taskIdRef.current = taskId;

        const eventSource = new EventSource(`/api/stream/music?taskId=${taskId}`);

        eventSource.addEventListener('music-result', (event) => {
          try {
            const data = JSON.parse(event.data);
            const callbackTaskId = data?.data?.task_id;

            if (callbackTaskId === taskIdRef.current) {
              setResponse(data);
              setLoading(false);
              eventSource.close();
            } else {
              console.log('무시된 다른 taskId:', callbackTaskId);
            }
          } catch (e) {
            console.error('SSE 파싱 에러:', e);
          }
        });

        eventSource.onerror = (err) => {
          console.error('SSE 오류:', err);
          eventSource.close();
          setLoading(false);
        };

      } catch (err) {
        console.error('upload 에러:', err);
        if (err.response) {
          console.error('서버 응답:', err.response.data);
        }
        alert('분석 또는 생성 실패');
        setLoading(false);
      }
    };

    upload();
  }, [file, navigate]);

  if (loading) return <Loading />;
  if (!response?.data?.data) return null;

  const item = response.data.data[0];

  return (
    <div className="relative w-screen overflow-hidden" style={{ height: calculatedHeight }}>
      {/* 움직이는 프레임 배경 */}
      <div
        className="absolute top-0 left-0 w-full z-0 flex justify-center"
        style={{ height: calculatedHeight }}
      >
        <div className="w-[calc(100%-32rem)] pt-10">
          <ResultSlide />
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
        <Col className="flex justify-center items-center h-full px-32">
          {loading && <Loading />}
          {item && (
            <ResultPlayer
              description={description}
              musicSrc={item.source_stream_audio_url}
              imageSrc={file}
            />
          )}
        </Col>
      </div>
    </div>
  );
};

export default Result;
