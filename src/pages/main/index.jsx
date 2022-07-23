import React from "react";
import styles from "./main.module.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

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
         <div>test</div>
         <Footer btnDatas={btnDatas} />
      </div>
   );
};

export default Main;
