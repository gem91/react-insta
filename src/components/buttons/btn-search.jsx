import React from "react";
import styles from "../../components/header/header.module.scss";

const BtnSearch = (props) => {
   return (
      <button className={styles.search} type="button">
         <i className="fa-solid fa-magnifying-glass"></i>
      </button>
   );
};

export default BtnSearch;
