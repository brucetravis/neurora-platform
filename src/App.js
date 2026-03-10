import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import Cursor from './components/cursor/Cursor';
import ScrollBtn from './components/buttons/scrollBtn/ScrollBtn';
import AboutPage from './pages/aboutpage/AboutPage';
import Header from './components/header/Header'
import Registration from './pages/registration/Registration';

function App() {
  // useLocation to track the current locatio of the page
  const location = useLocation()

  return (
    <>
      <div className="App">
        {location.pathname === '/userRegistration' ? ('') : (<Header />) }
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/aboutPage' element={<AboutPage />} />
          <Route path='/userRegistration' element={<Registration />} />
        </Routes>
      </div>
      <Cursor />
      <ScrollBtn />
    </>
  );
}

export default App;
