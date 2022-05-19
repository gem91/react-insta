import React from 'react';
import styles from './page-like.module.css'

const LikeComment = ({datas}) => {

    return(
        <li>
            {datas.map((data) => (
                  <a href="#">
                    <img src="" alt={`${data.name}'s PR`} />
                    <p><span className={styles.name}>{data.name}</span>님이 댓글을 남겼습니다: <span>{data.comment}</span></p>
                    <img src="" alt={`${data.name}'s comment`} />
                  </a>
                ))}

      
                </li>

    );
}

export default LikeComment;