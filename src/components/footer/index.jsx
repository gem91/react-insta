import React from "react";
import { Link } from "react-router-dom";

import BtnSearch from "../buttons/btn-search";
import BtnHome from "../buttons/btn-home";
import BtnLike from "../buttons/btn-like";
import BtnProfile from "../buttons/btn-profile";
import styles from "./footer.module.scss";

const Footer = ({ btnDatas }) => {
   return (
      <footer className={styles.footer}>
         <div className={styles.MenuLists}>
            <Link to="/home">
               <BtnHome />
            </Link>
            <Link to="/search">
               <BtnSearch />
            </Link>
            <Link to="/like">
               <BtnLike />
            </Link>
            <Link to="/profile">
               <BtnProfile />
            </Link>
         </div>
      </footer>
   );
};

export default Footer;
