import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../components/buttons/LoginButton";

import styles from "./login.module.scss";

const Login = ({ user, setUser }) => {
   const idRef = useRef();

   const handleTextValue = () => {
      const idValue = idRef.current.value;
      setUser(idValue);
   };

   const pressEnter = (e) => {
      if (e.key === "Enter") {
         handleTextValue();
      }
   };

   return (
      <div className={styles.loginWrap}>
         <h1 className={styles.logo}>
            <img src="../images/insta-font-logo.png" alt="로고이미지"></img>
         </h1>
         <input
            ref={idRef}
            className={styles.idInput}
            type="text"
            placeholder="Enter Your Name"
            onKeyPress={pressEnter}
            onChange={handleTextValue}
         />
         {user !== null ? (
            <Link to="/home">
               <LoginButton />
            </Link>
         ) : (
            <LoginButton />
         )}
      </div>
   );
};

export default Login;
