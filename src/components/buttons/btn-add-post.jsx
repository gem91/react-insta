import React from "react";
import styles from "../../components/header/header.module.scss";

const BtnAddPost = (props) => {
   return (
      <button className={styles.addPost} type="button">
         <i className="fa-solid fa-plus"></i>
      </button>
   );
};

export default BtnAddPost;
