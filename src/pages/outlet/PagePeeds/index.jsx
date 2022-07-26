import React from "react";
import Avatar from "../../../components/avatar";
import styles from "./peeds.module.scss";

const PagePeeds = (props) => {
   return (
      <div className={styles.peedContainer}>
         <div className={styles.profile}>
            <Avatar />
            <span>닉네임</span>
         </div>
         <div className={styles.contents}>
            <span className={styles.postBox}>
               <img src="http://placeimg.com/640/480/any" alt="" />
            </span>
            <div className={styles.socialContent}>
               <div className={styles.userFlow}>
                  <span>좋아요</span>
                  <span>댓글</span>
                  <span>보내기</span>
               </div>
               <div className={styles.commentBox}>
                  <ul>
                     <li>
                        <span>
                           <Avatar width={35} height={35} />
                        </span>
                        <p>우아 멋져요~</p>
                     </li>
                     <li>
                        <span>
                           <Avatar width={35} height={35} />
                        </span>
                        <p>맞팔해요~</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PagePeeds;
