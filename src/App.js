import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import background from './assets/background.jpg';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Manual from './pages/Manual';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Upload from './pages/Upload';
import Loading from './components/Loading';
import Result from './pages/Result';
import Header from './components/Header';
import ComponentTest from './pages/ComponentTest';

function App() {
  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',  // ✅ 스크롤 시 배경 고정
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden'
  };

  return (
    <div 
      className="App" 
      style={backgroundImage}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/loading" element={<Loading/>} />
          <Route path="/result" element={<Result />} />
          <Route path="/test" element={<ComponentTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
