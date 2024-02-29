import React from 'react';
import COLOR_MAPPINGS from '../../constants/colors';
import styles from './card.module.scss';

const Card = ({
  name,
  backgroundColor,
  backgroundImageURL,
  profileImageURL,
  messageCount,
  topReactions,
}) => {
  const style = {
    backgroundColor: COLOR_MAPPINGS[backgroundColor],
    backgroundImage: `url(${backgroundImageURL})`,
  };

  return (
    <div className={styles.card} style={style}>
      <div>
        <h2 className={styles.cardHeader}>To. {name}</h2>
        <div className={styles.cardBody}>
          <div className={styles.ProfileImage}>
            {/* profile image 컴포넌트 */}
          </div>
          <p className={styles.messageContainer}>
            <span className={styles.messageCount}>{messageCount}</span>명이
            작성했어요!
          </p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <hr className={styles.separator} />
        {/* <div >
        {topReactions
          .map
          // 버튼 컴포넌트 들어갈 예정
          ()}
      </div> */}
      </div>
    </div>
  );
};

export default Card;
