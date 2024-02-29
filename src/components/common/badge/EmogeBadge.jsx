import React from 'react';
// SCSS 모듈을 스타일 객체로 임포트
import styles from './BadgeDesign.module.scss';

function EmogeBadge() {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_emoji}>
        <div className={styles.ic}>{children}</div>
        <div className={styles.img_text}>24</div>
      </div>
    </div>
  );
}

export default EmogeBadge;
