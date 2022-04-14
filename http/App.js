import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
