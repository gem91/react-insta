import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Peeds from '../../components/peeds/peeds';
import styles from './main_page.module.css'

const MainPage = (props) => {
    const navigator = useNavigate();
    const goToMain = () => {
        console.log('찍히나?');
        navigator(
        {pathname: '/main'},
    )
    console.log('page이동성공');
    }
    
    return(
        <div className={styles.mainWrap}>
            <Header></Header>
            <div className={styles.contents}>
                <Peeds></Peeds>
            </div>
            <Footer linkMain={goToMain}></Footer>
        </div>
    )
};

export default MainPage;