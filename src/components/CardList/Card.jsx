import React from 'react';
import COLOR_MAPPINGS from '../../constants/colors';
import styles from './card.module.scss';

const Card = ({
  name,
  backgroundColor,
  backgroundImageURL,
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
        <div className={styles.cardHeader}>To. {name}</div>
        <div className={styles.cardBody}>
          <div className={styles.messageCount}>
            {messageCount}명이 작성했어요!
          </div>
        </div>
      </div>
      {/* <div className={styles.cardFooter}>
        {topReactions
          .map
          // 버튼 컴포넌트 들어갈 예정
          ()}
      </div> */}
    </div>
  );
};

export default Card;
