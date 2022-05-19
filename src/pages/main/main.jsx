
import React from 'react';
import {Outlet } from 'react-router-dom';
import styles from './main.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
// import BtnHome from '../../components/buttons/btn-home';
// import BtnLike from '../../components/buttons/btn-like';
// import BtnSearch from '../../components/buttons/btn-search';
// import BtnProfile from '../../components/buttons/btn-profile';


const Main = () => {
    const btnDatas = [
        {id: 1, obj: 'BtnHome', path: '/' },
        {id: 2, obj: 'BtnLike', path: '/like' },
        {id: 3, obj: 'BtnSearch', path: '/search' },
        {id: 4, obj: 'BtnProfile', path: '/profile' }
    ]

   
    return(
        <div className={styles.mainWrap}>
            <Header />
            <Outlet />
            <Footer btnDatas={btnDatas} />
        </div>
    )
};

export default Main;