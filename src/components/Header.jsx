import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import MusicPlayer from './MusicPlayer';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: '소개글', path: '/intro' },
    { label: '사용법', path: '/manual' },
    { label: '갤러리', path: '/gallery' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 5rem',
  };

  const logoStyle = {
    height: '60px',
    cursor: 'pointer',
  };

  const tabContainerStyle = {
    display: 'flex',
    gap: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '20px',
    padding: '6px 10px',
  };

  const tabStyle = (path) => ({
    padding: '8px 20px',
    borderRadius: '20px',
    backgroundColor: location.pathname === path ? 'rgba(0,0,0,0.08)' : 'transparent',
    color: location.pathname === path ? '#b4652f' : '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  });

  return (
    <div style={containerStyle}>
      {/* 로고 */}
      <img src={logo} alt="Logo" style={logoStyle} onClick={() => navigate('/')} />

      {/* 탭 메뉴 */}
      <div style={tabContainerStyle}>
        {tabs.map((tab) => (
          <div
            key={tab.path}
            style={tabStyle(tab.path)}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </div>
        ))}

        <MusicPlayer
          className="mx-3 scale-90"
          src={'https://apiboxfiles.erweima.ai/MTZiNWEzMTktMmNiYS00MjE5LWEzODktMWU2OWMxMTg5OTYw.mp3'}
          showProgressbar={false}
        />

      </div>
    </div>
  );
}

export default Header;
