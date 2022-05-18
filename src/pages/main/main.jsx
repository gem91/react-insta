
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Header from '../../components/header/header';
import BtnSearch from '../../components/buttons/btn-search';
import BtnHome from '../../components/buttons/btn-home';
import BtnLike from '../../components/buttons/btn-like';
import styles from './main.module.css';
import BtnProfile from '../../components/buttons/btn-profile';

import PagePeeds from '../page-peeds/page-peeds';
import PageLike from '../page-like/page-like';
import PageSearch from '../page-search/page-search';
import PageProfile from '../page-profile/page-profile';

const Main = (props) => {
    return(
        <div className={styles.mainWrap}>
            <Header />
            <div>
            <Routes>
               <Route path="/home" element={<PagePeeds />}></Route>
               <Route path="/search" element={<PageSearch />}></Route>
               <Route path="/like" element={<PageLike />}></Route>
               <Route path="/profile" element={<PageProfile />}></Route>
            </Routes>
            </div>
          
            <footer className={styles.footer}>
                <nav>
                    <NavLink to="/home"><BtnHome /></NavLink>
                    <NavLink to="/search"><BtnLike /></NavLink>
                    <NavLink to="/like"><BtnSearch /></NavLink>
                    <NavLink to="/profile"><BtnProfile /></NavLink>
                </nav>
            </footer>
        </div>
    )
};

export default Main;