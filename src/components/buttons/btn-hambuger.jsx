import React from "react";
import styles from "../../components/header/header.module.scss";

const BtnHambuger = (props) => {
   return (
      <button className={styles.hambuger} type="button">
         <i className="fa-solid fa-bars"></i>
      </button>
   );
};

export default BtnHambuger;
