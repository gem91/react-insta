import React from 'react';
import { NavLink } from 'react-router-dom';
// import BtnSearch from '../buttons/btn-search';
// import BtnHome from '../buttons/btn-home';
// import BtnLike from '../buttons/btn-like';
// import BtnProfile from '../buttons/btn-profile';
import styles from './footer.module.css'

const Footer = ( {btnDatas} ) => {
    return(
        <footer className={styles.footer}>
            <nav>
                {btnDatas.map((data) => (
                  <NavLink key={data.id} to={data.path}>{data.obj}</NavLink>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;