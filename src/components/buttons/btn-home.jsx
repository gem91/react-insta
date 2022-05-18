import React from 'react';
import styles from './buttons.module.css'

const BtnHome = ({linkMain}) => {
   
    
    return(
        <button className={styles.home} type='button'>
            <i className="fa-solid fa-house"></i>
        </button>
    )
};

export default BtnHome;