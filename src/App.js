import Home from './components/Home';
import Donate from './components/Donate';
import Complete from './components/Complete';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import './index.css'; // 폰트 불러오기
import { createTheme, ThemeProvider } from '@mui/material/styles'; // ✅ 추가
import { useEffect, useRef,useState } from 'react';

const theme = createTheme({
  typography: {    fontFamily: 'SchoolSafetyRoundedSmile'
  }
  })

function App() {
  
   const audioRef = useRef(null);

  const [currentMusic, setCurrentMusic] = useState('/music1.mp3');

  useEffect(() => {
    if(audioRef.current){
      audioRef.current.src = currentMusic;
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
  }, [currentMusic]);

  return (
    <>    
    
     <audio
        ref={audioRef}
        src="/music.mp3"
        autoPlay
        loop
      />
      <ThemeProvider theme={theme}>

      <Router>
        <Routes>
          <Route path='/' element={<Home setCurrentMusic={setCurrentMusic}/>}></Route>
          <Route path='/donate' element={<Donate />}></Route>
          <Route path='/complete' element={<Complete />}></Route>
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
