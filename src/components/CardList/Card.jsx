import React from 'react';
import { COLOR_MAPPINGS, COLOR_IMAGES_MAPPINGS } from '../../constants/colors';
import styles from './card.module.scss';
import ProfileImage from '../common/ProfileImage';
import EmojiBadge from '../common/badge/EmojiBadge';

const Card = ({
  name,
  backgroundColor,
  backgroundImageURL,
  recentMessages,
  messageCount,
  topReactions,
}) => {
  const style = {};

  // 배경 색상이 있을 경우 해당 색상 적용
  if (backgroundColor && COLOR_MAPPINGS[backgroundColor]) {
    style.backgroundColor = COLOR_MAPPINGS[backgroundColor];
    style.color = `var(--grayscale900)`;
  }

  // 배경 이미지 URL이 있을 경우 이미지 적용
  if (backgroundImageURL) {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageURL})`;
    style.backgroundSize = 'cover';
    style.color = 'var(--white)';
  }

  // 동적으로 클래스 이름 생성
  const backgroundClassName = `card-${backgroundColor}`;

  // 색상에 맞는 그림자 이미지 가져오기
  const shadowImage = backgroundColor
    ? COLOR_IMAGES_MAPPINGS[backgroundColor]
    : null;

  // overflowCount 값 설정
  let overflowCount = null;
  if (messageCount > 3) {
    overflowCount = messageCount - 3;
  }

  return (
    <div
      className={`${styles.card} ${styles[backgroundClassName]}`} // 동적 클래스 추가
      style={style}
    >
      <div className={styles.cardBody}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardHeader}>To. {name}</h2>
          <div className={`${styles.profileImage} ${styles.stack}`}>
            {recentMessages &&
              recentMessages
                .slice(0, 3)
                .map(message => (
                  <ProfileImage
                    key={message.id}
                    url={message.profileImageURL}
                    width={28}
                    height={28}
                  />
                ))}
            {overflowCount && (
              <div className={styles.overflowCount}>+{overflowCount}</div>
            )}
          </div>
          <p className={styles.messageContainer}>
            <span className={styles.messageCount}>{messageCount}</span>명이
            작성했어요!
          </p>
        </div>

        <div className={styles.cardFooter}>
          <hr className={styles.separator} />
          {/* 반응 버튼 컴포넌트가 들어갈 위치 */}
          {topReactions && topReactions.length > 0 && (
            <div className={styles.emojiBadge}>
              {topReactions.map(reaction => (
                <EmojiBadge
                  key={reaction.id}
                  emoji={reaction.emoji}
                  count={reaction.count}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {!backgroundImageURL && shadowImage && (
        <img className={styles.shadowImage} src={shadowImage} alt="Shadow" />
      )}
    </div>
  );
};

export default Card;
