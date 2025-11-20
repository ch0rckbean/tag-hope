import Donate from './components/Donate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/donate' element={<Donate />}></Route>
          {/* <Route path='/complete' element={<Complete />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
