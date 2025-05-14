import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import background from './assets/background.jpg';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Manual from './pages/Manual';
import My from './pages/My';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Upload from './pages/Upload';
import Loading from './pages/Loading';
import Result from './pages/Result';
import Header from './components/Header';

function App() {

  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  }

  
  return (
    <div 
      className="App" 
      style={backgroundImage}
    >
      <Router>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />          {/*홈*/}
          <Route path="/intro" element={<Intro />} />     {/*소개글*/}
          <Route path="/manual" element={<Manual />} />    {/*사용 방법*/}

          <Route path="/my" element={<My />} />        {/*나만의 사진*/}
          <Route path="/login" element={<Login />} />     {/*로그인*/}
          <Route path="/signup" element={<Signup />} />    {/*회원가입*/}

          <Route path="/upload" element={<Upload />} />    {/*파일 업로드*/}
          <Route path="/loading" element={<Loading/>} />   {/*로딩*/}
          <Route path="/result" element={<Result />} />    {/*결과*/}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
