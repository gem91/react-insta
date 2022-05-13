import React from 'react';
import styles from './buttons.module.css'

const BtnHambuger = (props) => {
    return(
        <button className={styles.hambuger} type='button'>
            <i className="fa-solid fa-bars"></i>
        </button>
    )
};

export default BtnHambuger;