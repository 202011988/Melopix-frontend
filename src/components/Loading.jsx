const Loading = () => {

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        flexDirection: 'column',
      }}
    >
      {/* <CircularProgress size={60} /> */}
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>분석 중입니다...</p>
    </div>
  );


};

export default Loading;