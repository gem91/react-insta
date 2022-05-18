
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
import Footer from '../../components/footer/footer';

const Main = () => {
    const btnDatas = [
        {id: 1, obj: 'BtnHome', path: '/' },
        {id: 2, obj: 'BtnLike', path: '/search' },
        {id: 3, obj: 'BtnSearch', path: '/like' },
        {id: 4, obj: 'BtnProfile', path: '/profile' }
    ]

   
    return(
        <div className={styles.mainWrap}>
            <Header />
            <div className={styles.contents}>
                <Routes>
                    <Route path="/" element={<PagePeeds />}></Route>
                    <Route path="/search" element={<PageSearch />}></Route>
                    <Route path="/like" element={<PageLike />}></Route>
                    <Route path="/profile" element={<PageProfile />}></Route>
                </Routes>
            </div>
          <Footer btnDatas={btnDatas} />
        </div>
    )
};

export default Main;