import React from 'react';
import { COLOR_MAPPINGS, COLOR_IMAGES_MAPPINGS } from '../../constants/colors';
import styles from './card.module.scss';

const Card = ({
  name,
  backgroundColor,
  backgroundImageURL,
  profileImageURL,
  messageCount,
  topReactions,
}) => {
  const style = {};

  // 배경 색상이 있을 경우 해당 색상 적용
  if (backgroundColor && COLOR_MAPPINGS[backgroundColor]) {
    style.backgroundColor = COLOR_MAPPINGS[backgroundColor];
  }

  // 배경 이미지 URL이 있을 경우 이미지 적용
  if (backgroundImageURL) {
    style.backgroundImage = `url(${backgroundImageURL})`;
  }

  // 동적으로 클래스 이름 생성
  const backgroundClassName = `card-${backgroundColor}`;

  // 색상에 맞는 그림자 이미지 가져오기
  const shadowImage = backgroundColor
    ? COLOR_IMAGES_MAPPINGS[backgroundColor]
    : null;

  return (
    <div
      className={`${styles.card} ${styles[backgroundClassName]}`} // 동적 클래스 추가
      style={style}
    >
      <div>
        <h2 className={styles.cardHeader}>To. {name}</h2>
        <div className={styles.cardBody}>
          <div className={styles.profileImage}>
            {/* 프로필 이미지 컴포넌트 */}
          </div>
          <p className={styles.messageContainer}>
            <span className={styles.messageCount}>{messageCount}</span>명이
            작성했어요!
          </p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <hr className={styles.separator} />
        {/* 반응 버튼 컴포넌트가 들어갈 위치 */}
      </div>
      {shadowImage && (
        <img className={styles.shadowImage} src={shadowImage} alt="Shadow" />
      )}
    </div>
  );
};

export default Card;
