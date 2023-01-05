import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import HomePage from './components/homepage/HomePage';
import ClockIn from "./components/clockIn/ClockIn";
import ClockOut from "./components/clockOut/ClockOut";
import RegisterUser from "./components/registerUser/RegisterUser";
import SignIn from './components/signIn/SignIn';

function App() {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <div className='content'>
          <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            <Route path='/' element={<SignIn />} />
            <Route path='/precheck' element={<ClockIn />} />
            <Route path='/postcheck' element={<ClockOut />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
