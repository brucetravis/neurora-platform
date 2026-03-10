import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import Cursor from './components/cursor/Cursor';
import ScrollBtn from './components/buttons/scrollBtn/ScrollBtn';
import AboutPage from './pages/aboutpage/AboutPage';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/aboutPage' element={<AboutPage />} />
        </Routes>
      </div>
      <Cursor />
      <ScrollBtn />
    </>
  );
}

export default App;
