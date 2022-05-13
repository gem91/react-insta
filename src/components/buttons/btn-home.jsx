import React from 'react';
import styles from './buttons.module.css'

const BtnHome = ({linkMain}) => {
    const goToHome = (e) => {
        linkMain()
       }
    
    return(
        <button className={styles.home} onClick={goToHome} type='button'>
            <i className="fa-solid fa-house"></i>
        </button>
    )
};

export default BtnHome;