import React from "react";
import styles from "./login.module.scss";

const LoginButton = (props) => {
   return (
      <button type="submit" className={styles.btnLogin}>
         Login
      </button>
   );
};

export default LoginButton;
