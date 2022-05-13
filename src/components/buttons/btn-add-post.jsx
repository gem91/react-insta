import React from 'react';
import styles from './buttons.module.css'

const BtnAddPost = (props) => {
    return(
        <button className={styles.addPost} type='button'>
            <i className="fa-solid fa-plus"></i>
        </button>
    )
};

export default BtnAddPost;