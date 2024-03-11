import React from 'react';
import styles from './loading.module.scss';
import Spinner from '../../../assets/loadingSpinner.gif';

function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <p className={styles.loadingText}>롤링페이지 로딩중</p>
      <p className={styles.loadingText}>잠시만 기다려 주세요</p>
      <img className={styles.loadingSpinner} src={Spinner} alt="spinner" />
    </div>
  );
}

export default Loading;
