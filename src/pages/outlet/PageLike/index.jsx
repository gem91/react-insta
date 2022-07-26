import React from "react";
import LikeComment from "./likeComment";
import styles from "./like.module.scss";

const PageLike = (props) => {
   const dummy = [
      { id: "1", name: "Linda", comment: "Thanks!", reComment: "I'm fine...!" },
      {
         id: "2",
         name: "Chloe",
         comment: "Hello :)",
         reComment: "Yes! Right!!",
      },
      {
         id: "3",
         name: "David",
         comment: "You are so funny!",
         reComment: "Okay See you then",
      },
      {
         id: "4",
         name: "Jay",
         comment: "hahaha",
         reComment: "Nice to meet you",
      },
   ];
   // const dummy = {
   //     '1' : {
   //         id : "1",
   //         name : "Linda",
   //         comment : "Thanks!",
   //         reComment : "I'm fine...!",
   //     },
   //     '2' : {
   //         id : "2",
   //         name : "Chloe",
   //         comment : "Hello :)",
   //         reComment : "Yes! Right!!",
   //     },
   //     '3' : {
   //         id : "3",
   //         name : "David",
   //         comment : "You are so funny!",
   //         reComment : "Okay See you then",
   //     },
   //     '4' : {
   //         id : "4",
   //         name : "Jay",
   //         comment : "hahaha",
   //         reComment : "Nice to meet you",
   //     }
   // };

   return (
      <div className={styles.likeWrap}>
         <ul>
            <li>
               <a href="#">
                  <img src="" alt="" />
                  <p>
                     <span className={styles.name}>mjkim</span>님이 회원님의{" "}
                     <span className={styles.object}>스토리를</span> 좋아합니다.
                  </p>
                  <img src="" alt="" />
               </a>
            </li>
            <li>
               <a href="#">
                  <img src="" alt="" />
                  <p>
                     <span className={styles.name}>mjkim</span>님이 회원님의{" "}
                     <span className={styles.object}>게시물을</span> 좋아합니다.
                  </p>
                  <img src="" alt="" />
               </a>
            </li>
            <LikeComment datas={dummy} />

            {/* <li>
                    <a href="#">
                    <img src="" alt="test" />
                    <p>
                        <span className={styles.name}></span>님이 댓글을 남겼습니다: <span>Hello~</span>
                    </p>
                    <img src="" alt="" />
                    </a>
                    
                </li> */}

            <li>
               <a href="#">
                  <img src="" alt="" />
                  <p>
                     <span className={styles.name}>mjkim</span>님이 댓글에서
                     회원님을 언급했습니다: <span>언급해랏</span>
                  </p>
                  <img src="" alt="" />
               </a>
            </li>
         </ul>
      </div>
   );
};

export default PageLike;
