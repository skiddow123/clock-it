import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homepage/HomePage';
import ClockIn from "./components/clockIn/ClockIn";
import ClockOut from "./components/clockOut/ClockOut";
import RegisterUser from "./components/registerUser/RegisterUser";
import SignIn from './components/signIn/SignIn';
// import { AuthProvider } from './context/AuthContext1';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      {/* <div className='content'> */}
        {/* <AuthProvider> */}
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/signIn' element={<SignIn />} /> */}
            {/* <Route path='/registerUser' element={<RegisterUser />} /> */}
            <Route path='/precheck' element={<ClockIn />} />
            <Route path='/postcheck' element={<ClockOut />} />
          </Routes>
        {/* </AuthProvider> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
