import React from "react";
import { useRef } from "react";
import styles from "./login.module.scss";

const Login = ({ setUser }) => {
   const idRef = useRef();

   const handleId = () => {
      const idValue = idRef.current.value;
      console.log(idValue);
      setUser(idValue);
   };
   const handleInput = (e) => {
      if (e.key === "Enter") {
         handleId();
      }
   };
   const onSubmit = () => {
      handleId();
      // counter.current = counter.current + 1;
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
            onKeyPress={handleInput}
         />
         <button className={styles.btnLogin} type="submit" onClick={onSubmit}>
            Login
         </button>
      </div>
   );
};

export default Login;
