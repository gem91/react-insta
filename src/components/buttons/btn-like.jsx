import React from "react";
import styles from "../../components/header/header.module.scss";

const BtnLike = (props) => {
   return (
      <button className={styles.like} type="button">
         <i className="fa-solid fa-heart"></i>
      </button>
   );
};

export default BtnLike;
