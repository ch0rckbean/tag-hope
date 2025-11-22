import Home from './components/Home';
import Donate from './components/Donate';
import Complete from './components/Complete';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'; // 폰트 불러오기
import { createTheme, ThemeProvider } from '@mui/material/styles'; // ✅ 추가

const theme = createTheme({
  typography: {    fontFamily: 'SchoolSafetyRoundedSmile'
  }
  })

function App() {
  return (
    <>    <ThemeProvider theme={theme}>

      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/donate' element={<Donate />}></Route>
          <Route path='/complete' element={<Complete />}></Route>
        </Routes>
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
