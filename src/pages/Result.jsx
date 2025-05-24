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
  const taskIdRef = useRef(null);

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

        const description = photoRes.data.description;

        // 필요하면 POST 바디로 보내는게 맞는지 확인하세요
        const sunoRes = await axios.post('/api/suno', null, {
          params: { description }
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
