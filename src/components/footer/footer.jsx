import React from 'react';
// import { useNavigate } from 'react-router-dom';
import BtnSearch from '../buttons/btn-search';
import BtnHome from '../buttons/btn-home';
import BtnLike from '../buttons/btn-like';
import Profile from '../profile/profile';
import styles from './footer.module.css'

const Footer = ( {linkMain} ) => {
    // const navigator = useNavigate();

 
    return(
        <footer className={styles.footer}>
            <ul>
                <li>
                    <BtnHome linkMain={linkMain}  />
                </li>
                <li><BtnSearch /></li>
                <li><BtnLike /></li>
                <li><Profile /></li>
            </ul>
        </footer>
    );
};

export default Footer;