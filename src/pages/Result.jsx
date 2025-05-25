import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [audioUrl, setAudioUrl] = useState(null);
  const [description, setDescription] = useState('');
  const taskIdRef = useRef(null);

  const calculatedHeight = "calc(100vh - 124px)";

  useEffect(() => {
    if (!file) {
      alert('파일이 없습니다.');
      navigate('/');
      return;
    }

    const upload = async () => {
      try {
        // 1. 이미지 설명 생성
        const formData = new FormData();
        formData.append('file', file);

        const photoRes = await axios.post('/api/phototag', formData);
        const photoDescription = photoRes.data.description;
        setDescription(photoDescription);

        // 2. Suno API 요청
        const sunoRes = await axios.post('/api/suno', null, {
          params: { description: photoDescription }
        });

        const taskId = sunoRes.data.data.taskId;
        taskIdRef.current = taskId;

        // 3. SSE 설정
        const eventSource = new EventSource(`/api/stream/music?taskId=${taskId}`);

        eventSource.addEventListener('music-result', (event) => {
          try {
            const data = JSON.parse(event.data);
            const callbackTaskId = data?.data?.task_id;
            const callbackType = data?.data?.callbackType;
            const audioUrlFromCallback = data?.data?.data?.[0]?.audio_url;

            if (callbackTaskId === taskIdRef.current &&
                (callbackType === 'first' || callbackType === 'complete') &&
                audioUrlFromCallback) {
              setAudioUrl(audioUrlFromCallback);
              setLoading(false);
              eventSource.close();
            } else {
              console.log('무시된 콜백:', callbackType, callbackTaskId);
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
        alert('분석 또는 생성 실패');
        setLoading(false);
      }
    };

    upload();
  }, [file, navigate]);

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
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Loading />
              </motion.div>
            )}

            {!loading && audioUrl && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              >
                <ResultPlayer
                  description={description}
                  musicSrc={audioUrl}
                  imageSrc={file}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Col>
      </div>
    </div>
  );
};

export default Result;
