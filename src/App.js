import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import Cursor from './components/cursor/Cursor';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
      <Cursor />
    </>
  );
}

export default App;
