import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'

const Login = (props) => {
    const navigator = useNavigate();
    const goToMain = () => {
        navigator(
            {pathname: '/main'},
            // {state: { id: userId }}
        )
    }
    return(
        <div className={styles.loginWrap}>
            <h1 className={styles.logo}><img src='../images/insta-font-logo.png' alt="로고이미지"></img></h1>
            <input className={styles.input} type="text" placeholder='Enter Your Name' />
            <button className={styles.btnLogin} type='submit' onClick={goToMain}>Login</button>
        </div>
    )
};

export default Login;