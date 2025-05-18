import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state?.file;

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!file) {
      navigate('/'); // 직접 접근 방지
      return;
    }

    const upload = async () => {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await axios.post('http://localhost:8080/api/phototag', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setResponse(res.data);
      } catch (err) {
        alert('이미지 분석에 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    upload();
  }, [file, navigate]);

  if (loading) return <Loading />;

  if (!response) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>분석 결과</h2>
      <h3>Title</h3>
      <p>{response.title}</p>

      <h3>Description</h3>
      <p>{response.description}</p>

      <h3>Keywords</h3>
      <ul>
        {response.keywords?.map((keyword, idx) => (
          <li key={idx}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
