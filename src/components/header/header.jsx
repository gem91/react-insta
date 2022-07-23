import React from "react";
import BtnAddPost from "../buttons/btn-add-post";
import BtnHambuger from "../buttons/btn-hambuger";
import BtnMessage from "../buttons/btn-message";
import BtnSearch from "../buttons/btn-search";
import styles from "./header.module.css";

const Header = (props) => {
   const goToMain = () => {};

   return (
      <header>
         <h1 className={styles.headLogo} onClick={goToMain}>
            <img src="./images/insta-font-logo.png" alt="logo" />
         </h1>
         <div className={styles.btnArea}>
            <BtnAddPost />
            <BtnSearch />
            <BtnMessage />
            <BtnHambuger />
         </div>
      </header>
   );
};
export default Header;
