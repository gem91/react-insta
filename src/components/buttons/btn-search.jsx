import React from 'react';
import styles from './buttons.module.css'

const BtnSearch = (props) => {
    return(
        <button className={styles.search} type='button'>
             <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    )
};

export default BtnSearch;