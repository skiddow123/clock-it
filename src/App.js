import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import HomePage from './components/homepage/HomePage';
import Checklist from './components/checlist/Checklist';

function App() {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/precheck' element={<Checklist />} />
            <Route path='/postcheck' element={<HomePage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
