import Home from './components/Home';
import Donate from './components/Donate';
import Donate2 from './components/Donate2';
import Complete from './components/Complete';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/donate' element={<Donate />}></Route>
          {/* <Route path='/donate2' element={<Donate2 />}></Route> */}
          <Route path='/complete' element={<Complete />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
