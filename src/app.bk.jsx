import { Route, Routes, Outlet } from 'react-router-dom';
import './app.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Peeds from './pages/page-peeds/page-peeds';
import LikePage from './pages/page-like/page-like';
import Login from './pages/login/login';
import MainPage from './pages/main/main_page';


// const Layout = () => {
//     return(
//         <>
//             <Header />
//             <Outlet />
//             <Footer />
//         </>
//     )
// }

function App() {


	return (
	 <div className='wrap'>
        <Routes>
            <Route path="/*" element={<Login />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
        </Routes>
    </div>
		
	);
}

export default App;
