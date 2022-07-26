import React from "react";
import styles from "../../components/header/header.module.scss";

const BtnMessage = (props) => {
   return (
      <button className={styles.message} type="button">
         <i className="fa-solid fa-envelope"></i>
      </button>
   );
};

export default BtnMessage;
