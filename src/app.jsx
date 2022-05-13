import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './pages/login/login';
import MainPage from './pages/main/main_page';

function App() {


  return (
   <div className='wrap'>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
