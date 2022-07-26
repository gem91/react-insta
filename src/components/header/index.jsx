import React from "react";
import { Link } from "react-router-dom";

import BtnAddPost from "../buttons/btn-add-post";
import BtnHambuger from "../buttons/btn-hambuger";
import BtnMessage from "../buttons/btn-message";
import styles from "./header.module.scss";

const Header = (props) => {
   return (
      <header>
         <Link to="/home" className={styles.headerLogo}>
            <img src="./images/insta-font-logo.png" alt="logo" />
         </Link>
         <div className={styles.btnLists}>
            <BtnAddPost />
            <BtnMessage />
            <BtnHambuger />
         </div>
      </header>
   );
};
export default Header;
