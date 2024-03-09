import React from 'react';
import styles from './cardSkeleton.module.scss';

function CardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <p> </p>
    </div>
  );
}

export default CardSkeleton;
