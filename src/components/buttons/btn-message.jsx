import React from 'react';
import styles from './buttons.module.css'

const BtnMessage = (props) => {
    return(
        <button className={styles.message} type='button'>
            <i className='fa-solid fa-envelope'></i>
        </button>
    )
};

export default BtnMessage;