import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state?.file;

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const taskIdRef = useRef(null); // taskId 추적용 ref

  useEffect(() => {
    if (!file) {
      navigate('/');
      return;
    }

    const upload = async () => {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const photoRes = await axios.post('http://localhost:8080/api/phototag', formData);
        const description = photoRes.data.description;

        const sunoRes = await axios.post('http://localhost:8080/api/suno', null, {
          params: { description }
        });

        const taskId = sunoRes.data.data.taskId;
        taskIdRef.current = taskId;

        const eventSource = new EventSource(`http://localhost:8080/api/stream/music?taskId=${taskId}`);

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
        console.error(err);
        alert('분석 또는 생성 실패');
        setLoading(false);
      }
    };

    upload();
  }, [file, navigate]);

  if (loading) return <Loading />;
  if (!response?.data?.data) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>음악 생성 결과</h2>
      {response.data.data.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '2rem' }}>
          <h3>🎵 {item.title}</h3>
          <p>🧠 태그: {item.tags}</p>
          <img
            src={item.image_url || item.source_image_url}
            alt={item.title}
            style={{ width: '300px', borderRadius: '12px', marginBottom: '1rem' }}
          />
          <audio
            controls
            src={item.stream_audio_url || item.source_stream_audio_url}
            style={{ width: '100%' }}
          >
            브라우저가 오디오 태그를 지원하지 않습니다.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default Result;
