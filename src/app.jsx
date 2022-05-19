import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import Login from './pages/login/login';
import Main from './pages/main/main';

import PagePeeds from './pages/page-peeds/page-peeds';
import PageLike from './pages/page-like/page-like';
import PageSearch from './pages/page-search/page-search';
import PageProfile from './pages/page-profile/page-profile';


import './app.css';

const App = () => {
    return(
        <div className='wrap'>
           <Routes>
                {/* <Route path="/" element={<Login />}></Route> */}
                <Route path="/" element={<Main />}>
                    <Route path="/" element={<PagePeeds />}></Route>
                    <Route path="/like" element={<PageLike />}></Route>
                    <Route path="/search" element={<PageSearch />}></Route>
                    <Route path="/profile" element={<PageProfile />}></Route>
                </Route>
            </Routes>
        </div>
    )
};

export default App;