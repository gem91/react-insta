import React from "react";
import styles from "../../components/header/header.module.scss";

const BtnHome = ({ linkMain }) => {
   return (
      <div className={styles.home} type="button">
         <i className="fa-solid fa-house"></i>
      </div>
   );
};

export default BtnHome;
