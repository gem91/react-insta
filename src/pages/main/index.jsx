import React from "react";
import styles from "./main.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";

const Main = ({ user }) => {
   console.log(user);
   const btnDatas = [
      { id: 1, obj: "BtnHome", path: "/" },
      { id: 2, obj: "BtnLike", path: "/like" },
      { id: 3, obj: "BtnSearch", path: "/search" },
      { id: 4, obj: "BtnProfile", path: "/profile" },
   ];

   return (
      <div className={styles.mainWrap}>
         <Header />
         <Outlet></Outlet>
         <Footer btnDatas={btnDatas} />
      </div>
   );
};

export default Main;
